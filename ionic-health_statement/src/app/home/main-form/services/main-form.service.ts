import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Student } from '../../models/student';
import { Employee } from '../../models/employee';
import { MainFormHttpReqService } from './main-form-http-req.service';
import { SignatureService } from '../../main-form/services/signature.service';

@Injectable({
  providedIn: 'root',
})
export class MainFormService {
  private form: FormGroup;
  constructor(
    private mainFormHttpReqService: MainFormHttpReqService,
    private signatureService: SignatureService
  ) {}

  public setupForm(user: Student | Employee): void {
    this.signatureService.clearSignature();
    const form = new FormGroup({
      formType: new FormControl(user.userType),
      id: new FormControl(user.id),
      name: new FormControl(`${user.firstName} ${user.lastName}`),
      signature: new FormControl(),
      institute: new FormControl({
        id: '',
        name: '',
      }),
      phoneNum: new FormControl(),
      formDate: new FormControl(this.getFormmatedDate(new Date())),
      guardian: new FormControl({
        id: '',
        name: '',
        gender: '',
      }),
    });
    this.signatureService.getSig().subscribe((sig) => {
      form.get('signature').setValue(sig);
    });
    if (user.userType === 'Student') {
      const student = user as Student;
      form.get('institute').setValue(student.institute);
      form.removeControl('phoneNum');
    } else if (user.userType === 'Employee') {
      const employee = user as Employee;
      form.get('phoneNum').setValue(employee.phoneNum);
      form.removeControl('guardian');
    }
    this.setForm(form);
  }
  private setForm(form: FormGroup): void {
    this.form = form;
  }

  public getForm(): FormGroup {
    return this.form;
  }
  private getFormmatedDate(t: Date): string {
    return `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}\t${t.getFullYear()}-${
      t.getMonth() + 1
    }-${t.getDate()}`;
  }
  public prepareFormForSubmit(): void {
    this.mainFormHttpReqService.sendFormToServer(this.form.value);
  }
}
