import { HttpClient } from 'aurelia-fetch-client';
import { ValidationControllerFactory, ValidationController } from 'aurelia-validation';
import { autoinject } from 'aurelia-dependency-injection';
import { RegisterViewValidator } from '../../validators/register-view-validator';
import { UserService, IUserService } from '../../services/user-service';
import { UserRegisterModel } from './../../models/user-register-model';
import * as toastr from 'toastr';

@autoinject()
export class RegisterViewModel {
  private validationController: ValidationController;
  private model: UserRegisterModel;
  public constructor(
      private userService: UserService,
      private validator: RegisterViewValidator,
      private validationControllerFactory: ValidationControllerFactory
  ) {
    this.model = new UserRegisterModel();
    this.validationController = validationControllerFactory.createForCurrentScope();
    this.validator.validate(this.model);
    new HttpClient()
      .fetch('https://data.fixer.io/api/latest')
      .then<any>(res => res.json())
      .then(r => console.log(r));
  }
  public async register() {
    // await this.userService.register(this.model);
    toastr.success('Rejestracja udana!');
  }
}
