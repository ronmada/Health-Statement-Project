import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee';
import { FormGroup, FormControl } from '@angular/forms';
import { MainFormService } from '../../services/main-form.service';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss'],
})
export class FormEmployeeComponent implements OnInit {
  @Input() employee: Employee;

  public employeeForm = new FormGroup({
    formType: new FormControl(),
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl({ value: '', disabled: true }),
    signature: new FormControl(),
    institute: new FormControl({
      id: '',
      name: '',
    }),
    phoneNum: new FormControl(),
  });

  constructor(private mainFormService: MainFormService) {}

  ngOnInit(): void {
    this.mainFormService.initForm(this.employeeForm, this.employee);
  }
  saveSig(sig: string): void {
    this.employeeForm.get('signature').setValue(sig);
  }
  submitEmployeeForm(): void {
    this.mainFormService.sendForm(this.employeeForm);
  }
}
