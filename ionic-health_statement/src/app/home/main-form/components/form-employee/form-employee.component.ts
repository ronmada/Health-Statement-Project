import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee';
import { FormGroup, FormControl } from '@angular/forms';
import { MainFormService } from '../../main-form.service';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss'],
})
export class FormEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  public employeeForm = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl({ value: '', disabled: true }),
    institute: new FormControl({
      id: new FormControl(),
      name: new FormControl(),
    }),
  });
  constructor(private mainFormService: MainFormService) {}

  ngOnInit(): void {
    this.mainFormService.initForm(this.employeeForm, this.employee);
  }
  submitEmployeeForm(): void {
    //
  }
}
