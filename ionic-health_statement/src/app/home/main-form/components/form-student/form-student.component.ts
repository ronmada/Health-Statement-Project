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
    formType: new FormControl(),
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl({ value: '', disabled: true }),
    signature: new FormControl(),
    institute: new FormControl({
      id: '',
      name: '',
    }),
    guardian: new FormControl({
      id: '',
      name: '',
      gender: '',
    }),
  });
  constructor(private mainFormService: MainFormService) {}

  ngOnInit(): void {
    this.mainFormService.initForm(this.studentForm, this.student);
  }
  saveSig(sig: string): void {
    this.studentForm.get('signature').setValue(sig);
  }
  submitStudentForm(): void {
    this.mainFormService.sendForm(this.studentForm);
  }
}
