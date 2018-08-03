import { EventsDetailsModel } from '../models/events-details-model';
import { autoinject } from 'aurelia-dependency-injection';
import { EventServices } from '../services/event-services';
import { EventTicketServices } from './../services/event-ticket-services';

@autoinject()
export class EventsDetailsViewModel {
  private eventId: string;
  private event: EventsDetailsModel;
  private ticketAmount: number;
  private ticketBanner: any;
  get ticketsPrice() {
    if (this.event.ticket.length === 0) return;
    return this.event.ticket[0].price;
  }
  constructor(
    private eventService: EventServices,
    private eventTicketService: EventTicketServices
  ) {}
  async activate(params: any) {
    this.eventId = params.id;
    await this.getEventDetails();
  }
  private async getEventDetails() {
    this.event = await this.eventService.getEvent(this.eventId);
    this.setTicketsBanner();
  }
  async purchasedTickets() {
    let confirm = window.confirm('Zakupić ?');

    if (!confirm) return;
    await this.eventTicketService.purchase(this.eventId, this.ticketAmount);
    this.event.availableTicketCount -= this.ticketAmount;
    // this.ticketAmount = 0;
    this.setTicketsBanner();
  }
  private setTicketsBanner() {
    let availableTicketPercentage = Math
        .round((100 * this.event.availableTicketCount) / this.event.ticketCount);
    if (availableTicketPercentage > 50) {
      this.ticketBanner = {
        class: 'alert alert-success',
      };
    } else if (availableTicketPercentage > 25) {
      this.ticketBanner = {
          class: 'alert alert-warning',
      };
    } else {
      this.ticketBanner = {
        class: 'alert alert-danger',
      }
    }
    this.ticketBanner.text `dostęp: ${availableTicketPercentage}% puli biletów`;
  }
}