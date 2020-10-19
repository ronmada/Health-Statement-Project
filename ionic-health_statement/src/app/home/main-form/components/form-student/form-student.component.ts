import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../../user.service';
import { Student } from '../../../models/student';
@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss'],
})
export class FormStudentComponent implements OnInit {
  @Input() student: Student;
  public studentForm = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl({ value: '', disabled: true }),
  });
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.setForm(this.studentForm, this.student);
  }
  setForm(form: FormGroup, stud: Student): void {
    form.get('id').setValue(stud.id);
    form.get('name').setValue(`${stud.firstName} ${stud.lastName}`);
  }
  submitStudentForm(): void {
    //
  }
}
