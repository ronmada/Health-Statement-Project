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
  ngOnInit(): void {
    //
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
