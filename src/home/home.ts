import { autoinject } from 'aurelia-dependency-injection';
import * as toastr from 'toastr';
import { observable } from 'aurelia-framework';
import { EventModel } from '../events/models/event-model';
import { EventServices } from '../events/services/event-services';
import { Router } from 'aurelia-router';

@autoinject()
export class HomeViewModel {
  private events: EventModel[];

  @observable()
  private searchText: string;
  constructor(
    private eventService: EventServices,
    private router: Router,
  ) {}

  async activate() {
    this.searchText = '';
    await this.browseEvents();
  }
  async browseEvents() {
    this.events = await this.eventService.browse(this.searchText);
    if (this.events.length === 0) {
      toastr.warning('Brak znalezionych rezultatow');
    }
  }
  private async searchTextChanged() {
    await this.browseEvents();
  }
  public redirectToEventDetails(eventId): void {
    this.router.navigate(`#/event/${eventId}`);
  }
}