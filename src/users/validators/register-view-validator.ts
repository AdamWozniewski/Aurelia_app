import { UserRegisterModel } from '../models/user-register-model';
import {ValidationRules} from 'aurelia-validation';

export class RegisterViewValidator {
  validate(model: UserRegisterModel): void {
    ValidationRules
      .ensure((model: UserRegisterModel) => model.login)
        .required()
        .withMessage('Pole wymagane')
      .ensure((model: UserRegisterModel) => model.email)
        .required()
        .withMessage('Pole wymagane')
        .email()
        .withMessage('Email jest niepoprawny')
      .ensure((model: UserRegisterModel) => model.password)
        .required()
        .withMessage('Hasło jest wymagane')
        .minLength(6)
        .withMessage('Hasło jest zbyt krótkie')
      .ensure((model: UserRegisterModel) => model.confirmPassword)
        .required()
        .withMessage('Pole wymagane')
        .satisfies((value: string, model: UserRegisterModel) => value === model.password)
        .withMessage('Hasła nie są zgodne !')
        .on(model)
  }
}