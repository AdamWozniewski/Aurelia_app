import { UpdateEventsModel } from './update-events-model';

export class CreateEventsModels extends UpdateEventsModel {
  startDate: Date;
  endDate: Date;
  tickets: number;
  price: number;
}