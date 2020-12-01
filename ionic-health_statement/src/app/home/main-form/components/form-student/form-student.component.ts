import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Student } from '../../../models/student';
import { MainFormService } from '../../services/main-form.service';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../services/alert.service';
import { PopoverService } from '../../services/popover.service';
@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss'],
})
export class FormStudentComponent implements OnInit {
  public student: Student;
  public studentForm: FormGroup;
  public submitBoolean: boolean;
  constructor(
    private mainFormService: MainFormService,
    private userService: UserService,
    private alertService: AlertService,
    public popoverService: PopoverService
  ) {
    this.studentForm = this.mainFormService.getForm();
    this.student = this.userService.getUser() as Student;
  }
  get guardian(): string {
    return this.studentForm.get('guardian').value.id;
  }
  get institute(): string {
    return this.studentForm.get('institute').value.name;
  }
  get signature(): string {
    return this.studentForm.get('signature').value;
  }
  ngOnInit(): void {
    this.submitBoolean = true;
    this.studentForm.valueChanges.subscribe(() => {
      console.log('form change');
      if (this.guardian && this.signature) this.submitBoolean = false;
    });
  }

  public submitForm(): void {
    this.mainFormService.prepareFormForSubmit();
    this.alertService.formSubmittedAlert();
  }
  public presentPopover($event: Event): void {
    this.popoverService.signaturePopOver($event).then(() => {
      //
    });
  }
}
