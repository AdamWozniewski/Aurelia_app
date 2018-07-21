import {
  ValidationControllerFactory,
  ValidationController,
  validationMessages,
} from "aurelia-validation";
import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-dependency-injection';
import * as toastr from 'toastr';
import { UsersLoginModel } from './../../models/users-login-model';
import { LoginViewValidator } from './../../validators/login-view-validator';
import { IdentityService } from './../../../core/identity-service';
import {UserService} from "../../services/user-service";


@autoinject()
export class UsersLoginViewModel {
  private model: UsersLoginModel;
  private validationController: ValidationController;
  private rememberMe: boolean;
  private userService: UserService;

  constructor (
    private validator: LoginViewValidator,
    private validationControllerFactory: ValidationControllerFactory,
    private indentityService: IdentityService,
    private router: Router,
  ) {
    this.model = new UsersLoginModel();
    this.rememberMe = true;
    this.validationController = this.validationControllerFactory.createForCurrentScope();
    validator.validate(this.model);
  }
  async login () {
      // let userIdentity = await this.userService.getUserIdentity();
      // this.indentityService.setUserIdentity(userIdentity);
      // this.router.navigate('#/home');
      toastr.success('Logowanie udane');
  }
}