import { NavigationInstruction, Next, Redirect } from 'aurelia-router';
import { UsersIdentityModel } from './../users/models/users-identity-model';

export class RoutingAuthorizeStep {
  private readonly userIdentity: UsersIdentityModel;
  constructor(private userIdentityModel: UsersIdentityModel) {
    this.userIdentityModel = userIdentityModel;
  }
  run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
    let requiredRoles = navigationInstruction
        .getAllInstructions()
        .map(i => i.config.settings)[0] // nasza zdefiniowana rola
    let isUserInRole = requiredRoles
      ? requiredRoles.some(r => r === this.userIdentity.role)
      : true;
    return isUserInRole ? next() : next.cancel(new Redirect('users/login'))
  }
}