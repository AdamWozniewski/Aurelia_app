import { autoinject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { EventServices } from '../../events/services/event-services';
import { EventModel } from '../../events/models/event-model';
import * as toastr from 'toastr';

@autoinject()
export class AdminsEvents {
  private events: EventModel[];

  constructor(
    private eventsService: EventServices,
    private router: Router,
  ) {
    this.events = [];
  }
  async activate() {
    await this.getAdminEvents();
  }
  private async getAdminEvents() {
    this.events = await this.eventsService.browse('');
  }
  public async deleteEvent(eventId: string, index: number) {
    let confirm = window.confirm('Usunąć ?');

    if (!confirm) {
      return;
    }
    // await this.eventsService.del(eventId);
    this.removeEventFromEvents(index);
    toastr.success('Usunięto');
  }
  private removeEventFromEvents(index: number) {
    this.events.slice(index, 1);
  }
  public redirectToAdminEventForm(event: string) {
    let url = event ? `#admins/events/${event}/update` : `#admins/events/create`;
    this.router.navigate(url);
  }
}