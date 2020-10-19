import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { Employee } from '../../../models/employee';
@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss'],
})
export class FormEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  constructor(private userService: UserService) {
    //
  }

  ngOnInit(): void {
    //
  }
}
