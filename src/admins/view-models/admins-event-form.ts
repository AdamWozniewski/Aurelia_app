import { autoinject } from 'aurelia-dependency-injection';
import { EventServices } from '../../events/services/event-services';
import { Router } from 'aurelia-router';
import * as toastr from 'toastr';
import { UpdateEventsModel } from './../models/update-events-model';
import { CreateEventsModels } from './../models/create-events-models';

@autoinject()
export class AdminsEventFormViewModel {
  private eventToUpdateId: string;
  private isCreateMode: boolean;
  private model;
  constructor(
    private eventsService: EventServices,
    private router: Router,
  ) {}
  private async setEditMode() {
      let eventToUpdate = await this.eventsService.getEvent(this.eventToUpdateId);
      let updateModel: UpdateEventsModel = {
        name: eventToUpdate.name,
        desc: eventToUpdate.desc,
      };
      this.model = updateModel;
  }
  public async createEvent() {
    await this.eventsService.create(<CreateEventsModels>this.model);
    this.redirectToAdminEvent();
    toastr.success('Utworzono');
  }
  public async editEvent() {
    await this.eventsService.update(this.eventToUpdateId, <UpdateEventsModel>this.model);
    this.redirectToAdminEvent();
    toastr.success('Zmodyfikowano');
  }
  private redirectToAdminEvent() {
    this.router.navigate('#/admin/events');
  }
  activate(params: any) {
    this.eventToUpdateId = params.id;
    this.isCreateMode = this.eventToUpdateId ? true : false;
  }
}