import { EventModel } from './event-model';
import { EventTicketModel } from './events-ticket-model';

export class EventsDetailsModel extends EventModel {
  ticket: EventTicketModel[];
}