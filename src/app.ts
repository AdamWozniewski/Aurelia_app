import { RouterConfiguration, Router } from 'aurelia-router';
import { UserService } from './users/services/user-service';
import { IdentityService } from './core/identity-service';
import { autoinject } from 'aurelia-dependency-injection';

export class App {
  router: Router;
  public constructor(
      // private identityService: IdentityService,
      private identityService: any,
      private userService: UserService,
  ) {}
  async activate() {
    // let userIdentity = await this.userService.getUserIdentity();
    // if (!this.identityService.isUserLogged) {
    //   this.identityService.setUserIdentity(userIdentity);
    // }

    this.identityService = {
      userIdentity: {
        login: 'Person'
      },
      isUserLogged: true
    }
  }
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia_app';
    config.map([
      {
        route: ['', 'home'],
        moduleId: './home/home',
      },
      {
        route: 'users',
        moduleId: './users/config/users-routing',
      },
      {
        route: '*',
        moduleId: './error/view-models/error',
      },
    ]);
  }
}
