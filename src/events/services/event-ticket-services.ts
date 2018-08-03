import { autoinject } from 'aurelia-dependency-injection';
import { HttpClient } from 'aurelia-fetch-client';
import { AuthService } from './../../core/auth-service';
import { DataService } from './../../core/data-service';

@autoinject()
export class EventTicketServices extends DataService{
  constructor(
    httpClient: HttpClient,
    authService: AuthService,
  ) {
    super(httpClient, authService);
  }
  purchase(eventId: string, amount: number): Promise<any> {
    const url = `events/${eventId}/tickets/purchase/${amount}`;
    return super.post<any>(url, null, true)
  }
}