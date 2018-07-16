import { autoinject } from 'aurelia-dependency-injection';
import { HttpClient } from 'aurelia-fetch-client';
import { DataService } from '../../core/data-service';
import { UserRegisterModel } from '../models/user-register-model';

export interface IUserService {
  register(model: UserRegisterModel): Promise<any>;
}

@autoinject()
export class UserService extends DataService implements IUserService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  register(model: UserRegisterModel): Promise<any> {
    let url = 'account/register';
    return super.post<any>(url, model);
  }
}