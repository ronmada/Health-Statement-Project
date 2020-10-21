import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Student } from '../../models/student';
import { Employee } from '../../models/employee';
import { SignatureService } from './signature.service';
@Injectable({
  providedIn: 'root',
})
export class MainFormService {
  public form = new FormGroup({
    formType: new FormControl(),
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl({ value: '', disabled: true }),
    signature: new FormControl(),
    institute: new FormControl({
      id: new FormControl(),
      name: new FormControl(),
    }),
    phoneNum: new FormControl(),
    formDate: new FormControl(),
    guardian: new FormControl({
      id: new FormControl(),
      name: new FormControl(),
      gender: new FormControl(),
    }),
  });
  constructor(private signatureService: SignatureService) {}
  initForm(form: FormGroup, user: Student | Employee): void {
    // this.form.get('formType').setValue(user.userType)
    // this.form.get('id').setValue(user.id);
    // this.form.get('name').setValue(`${user.firstName} ${user.lastName}`);
    form.get('id').setValue(user.id);
    form.get('name').setValue(`${user.firstName} ${user.lastName}`);
    form.get('formType').setValue(user.userType);
    if (user.userType === 'Student') {
      const student = user as Student;
      // this.form.get('institute').setValue(student.institute)
      form.get('institute').setValue(student.institute);
    } else if (user.userType === 'Employee') {
      const employee = user as Employee;
      // this.form.get('phoneNum').setValue(employee.phoneNum)
      form.get('phoneNum').setValue(employee.phoneNum);
    }
  }
  
  sendForm(form : FormGroup) : void{
    console.log(form.value)
  }
}
