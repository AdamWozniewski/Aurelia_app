import { UsersIdentityModel } from './../users/models/users-identity-model';

export class IdentityService {
  private identity: UsersIdentityModel;
  public get userIdentity() {
    return this.identity;
  }
  public get isUserLogged() {
    return this.identity ? true : false;
  }
  public setUserIdentity(userIdentity: UsersIdentityModel): void {
    this.identity = userIdentity;
  }
}