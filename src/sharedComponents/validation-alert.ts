import { ValidationController } from 'aurelia-validation';

export class ValidationAlertViewModel {
  private validationController: ValidationController;
  activate(validationController: ValidationController) {
    this.validationController = validationController;
    console.log(this.validationController.errors)
  }
}