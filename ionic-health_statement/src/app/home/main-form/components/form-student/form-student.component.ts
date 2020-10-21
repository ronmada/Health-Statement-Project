import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Student } from '../../../models/student';
import { MainFormService } from '../../services/main-form.service';
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
  constructor(private mainFormService: MainFormService) {}

  ngOnInit(): void {
    this.mainFormService.initForm(this.studentForm, this.student);
  }

  submitStudentForm(): void {
    //
  }
}
