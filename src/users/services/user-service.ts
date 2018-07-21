import { autoinject } from 'aurelia-dependency-injection';
import { HttpClient } from 'aurelia-fetch-client';
import { DataService } from '../../core/data-service';
import { UserRegisterModel } from '../models/user-register-model';
import { UsersLoginModel } from '../models/users-login-model';
import { UserAuthModel } from './../models/user-auth-model';
import { AuthService } from './../../core/auth-service'
import {UsersIdentityModel} from "../models/users-identity-model";

export interface IUserService {
  register(model: UserRegisterModel): Promise<any>;
  login(model: UsersLoginModel): Promise<UserAuthModel>;
}

@autoinject()
export class UserService extends DataService implements IUserService {
  constructor(
    httpClient: HttpClient,
    authService: AuthService
  ) {
    super(httpClient, authService);
  }
  register(model: UserRegisterModel): Promise<any> {
    let url = 'account/register';
    return super.post<any>(url, model, false);
  }
  login(model: UsersLoginModel): Promise<UserAuthModel> {
    let url = 'account/login';
    return super.post<UserAuthModel>(url, model, false);
  }
  // getUserIdentity(): Promise<UsersIdentityModel> {
  getUserIdentity(): any {
    // let url = 'account';
    // return super.get<UsersIdentityModel>(url, true);
  }
}