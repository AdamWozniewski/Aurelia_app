import { UsersLoginModel } from './../models/users-login-model';
import { ValidationRules } from 'aurelia-validation';

export class LoginViewValidator {
  validate(model: UsersLoginModel): void {
    ValidationRules
      .ensure((model: UsersLoginModel) => model.login)
        .required()
        .withMessage('Pole wymagane')
      .ensure((model: UsersLoginModel) => model.password)
        .required()
        .withMessage('Pole wymagane')
      .on(model);
  }
}
