import { RouterConfiguration, Router } from 'aurelia-router';

export class EventRouting {
  configureRouter(config: RouterConfiguration) {
    config.title = 'Events';
    config.map([
      {
        route: ':id',
        moduleId: './../view-models/event-details',
      }
    ]);
  }
}