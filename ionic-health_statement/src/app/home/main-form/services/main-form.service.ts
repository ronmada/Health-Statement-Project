import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Student } from '../../models/student';
import { Employee } from '../../models/employee';

@Injectable({
  providedIn: 'root',
})
export class MainFormService {
  initForm(form: FormGroup, user: Student | Employee): void {
    if (user.userType === 'Student') {
      const student = user as Student;
      form.get('id').setValue(student.id);
      form.get('name').setValue(`${student.firstName} ${student.lastName}`);
    } else if (user.userType === 'Employee') {
      const employee = user as Employee;
      form.get('id').setValue(employee.id);
      form.get('name').setValue(`${employee.firstName} ${employee.lastName}`);
    }
  }
}
