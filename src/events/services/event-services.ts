import { autoinject } from 'aurelia-dependency-injection';
import { HttpClient } from 'aurelia-fetch-client';
import { DataService } from '../../core/data-service';
import { EventModel } from '../models/event-model';
import { AuthService } from '../../core/auth-service';
import { EventsDetailsModel } from "../models/events-details-model";
import { CreateEventsModels } from "../../admins/models/create-events-models";
import { UpdateEventsModel } from "../../admins/models/update-events-model";

@autoinject()
export class EventServices extends DataService {
  constructor(
    httpClient: HttpClient,
    authService: AuthService,
  ) {
    super(httpClient, authService);
  }
  browse(name: string) : Promise<EventModel[]> {
    let url = `events?name=${name}`;
    return super.get<EventModel[]>(url, false);
  }
  getEvent(eventId: string) : Promise<EventsDetailsModel> {
    let url = `events/${eventId}`;
    return super.get<EventsDetailsModel>(url, true);
  }
  create(model: CreateEventsModels) : Promise<any> {
    let url = 'events';
    return super.post<any>(url, model, true);
  }
  update(eventId: string, model: UpdateEventsModel) : Promise<any> {
    let url = `events/${eventId}`;
    return super.put<any>(url, model, true);
  }
  delete(eventId: string) : Promise<any> {
    let url = `events/${eventId}`;
    return super.del(url, true);
  }
}