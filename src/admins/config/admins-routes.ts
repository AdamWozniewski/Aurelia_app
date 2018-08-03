import { RouterConfiguration } from 'aurelia-router';

export class AdminsRoutes {
  configureRouter(config: RouterConfiguration) {
    config.title = 'Admin';
    config.map([
      {
        route: ['events/create', 'events/:id/update'],
        moduleId: './../view-models/admins-events-form',
      },
    ]);
  }
}