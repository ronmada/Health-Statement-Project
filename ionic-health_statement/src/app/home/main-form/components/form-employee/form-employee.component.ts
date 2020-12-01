import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee';
import { FormGroup } from '@angular/forms';
import { MainFormService } from '../../services/main-form.service';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../services/alert.service';
import { PopoverService } from '../../services/popover.service';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss'],
})
export class FormEmployeeComponent implements OnInit {
  public employee: Employee;
  public employeeForm: FormGroup;
  public submitBoolean: boolean;
  constructor(
    private mainFormService: MainFormService,
    private userService: UserService,
    private alertService: AlertService,
    public popoverService: PopoverService
  ) {
    this.employeeForm = this.mainFormService.getForm();
    this.employee = this.userService.getUser() as Employee;
  }
  get institute(): string {
    return this.employeeForm.get('institute').value.name;
  }
  get signature(): string {
    return this.employeeForm.get('signature').value;
  }
  ngOnInit(): void {
    this.submitBoolean = true;
    this.employeeForm.valueChanges.subscribe(() => {
      console.log('form change');
      if (this.institute && this.signature) this.submitBoolean = false;
    });
  }

  saveSig(sig: string): void {
    this.employeeForm.get('signature').setValue(sig);
  }
  submitEmployeeForm(): void {
    this.mainFormService.prepareFormForSubmit();
    this.alertService.formSubmittedAlert();
  }
  public presentPopover($event: Event): void {
    this.popoverService.signaturePopOver($event).then(() => {
      //
    });
  }
}
