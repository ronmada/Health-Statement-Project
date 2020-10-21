import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Student } from '../../models/student';
import { Employee } from '../../models/employee';
import { MainFormHttpReqService } from './main-form-http-req.service';
// import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MainFormService {
  public form = new FormGroup({
    formType: new FormControl(),
    id: new FormControl(),
    name: new FormControl(),
    signature: new FormControl(),
    institute: new FormControl({
      id: '',
      name: '',
    }),
    phoneNum: new FormControl(),
    formDate: new FormControl(),
    guardian: new FormControl({
      id: '',
      name: '',
      gender: '',
    }),
  });
  constructor(private mainFormHttpReqService: MainFormHttpReqService) {}

  setupForm(user: Student | Employee): void {
    console.log('SETUP');
    this.form.get('formType').setValue(user.userType);
    this.form.get('id').setValue(user.id);
    this.form.get('name').setValue(`${user.firstName} ${user.lastName}`);
    if (user.userType === 'Student') {
      const student = user as Student;
      this.form.get('institute').setValue(student.institute);
      this.form.removeControl('phoneNum');
    } else if (user.userType === 'Employee') {
      const employee = user as Employee;
      this.form.get('phoneNum').setValue(employee.phoneNum);
      this.form.removeControl('guardian');
    }
  }
  public prepareFormForSubmit(): void {
    // const formParams = this.form.value as HttpParams;
    this.mainFormHttpReqService.sendFormToServer(this.form.value);
  }
  // initForm(form: FormGroup, user: Student | Employee): void {
  //   this.form.get('formType').setValue(user.userType);
  //   this.form.get('id').setValue(user.id);
  //   this.form.get('name').setValue(`${user.firstName} ${user.lastName}`);
  //   form.get('id').setValue(user.id);
  //   form.get('name').setValue(`${user.firstName} ${user.lastName}`);
  //   form.get('formType').setValue(user.userType);
  //   if (user.userType === 'Student') {
  //     const student = user as Student;
  //     this.form.get('institute').setValue(student.institute);
  //     form.get('institute').setValue(student.institute);
  //   } else if (user.userType === 'Employee') {
  //     const employee = user as Employee;
  //     this.form.get('phoneNum').setValue(employee.phoneNum);
  //     form.get('phoneNum').setValue(employee.phoneNum);
  //   }
  // }
  // initForm2(user: Student | Employee): void {
  //   this.form.get('formType').setValue(user.userType);
  //   this.form.get('id').setValue(user.id);
  //   this.form.get('name').setValue(`${user.firstName} ${user.lastName}`);
  // }
  // initFormStudent(student: Student): void {
  //   this.form.reset();
  //   this.form.get('institute').setValue(student.institute);
  // }
  // initFormEmployee(employee: Employee): void {
  //   this.form.reset();
  //   this.form.get('phoneNum').setValue(employee.phoneNum);
  // }
}
