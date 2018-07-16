import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
  router: Router;
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
