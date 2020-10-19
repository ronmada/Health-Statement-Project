import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss'],
})
export class FormStudentComponent implements OnInit {
  public form = new FormGroup({
    id: new FormControl(2688373),
  });
  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }
  submitStudentForm() :void{
    //
  }
}
