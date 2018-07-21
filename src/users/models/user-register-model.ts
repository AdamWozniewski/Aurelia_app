import { UsersLoginModel } from './users-login-model';

export class UserRegisterModel extends UsersLoginModel{
  // login: string; // z UserLoginModel
  email: string;
  // password: string; // z UserLoginModel
  confirmPassword: string;
  role: string;
  constructor () {
    super();
    this.role = 'user';
  }
}