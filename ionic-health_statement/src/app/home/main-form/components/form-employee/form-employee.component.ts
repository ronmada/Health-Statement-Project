import { Component, OnInit } from "@angular/core";
import { Employee } from "../../../models/employee";
import { FormGroup } from "@angular/forms";
import { MainFormService } from "../../services/main-form.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-form-employee",
  templateUrl: "./form-employee.component.html",
  styleUrls: ["./form-employee.component.scss"],
})
export class FormEmployeeComponent implements OnInit {
  public employee: Employee;
  public employeeForm: FormGroup;

  constructor(
    private mainFormService: MainFormService,
    private userService: UserService
  ) {
    this.employeeForm = this.mainFormService.getForm();
    this.employee = this.userService.user__ as Employee;
  }

  ngOnInit(): void {
    //
  }
  saveSig(sig: string): void {
    this.employeeForm.get("signature").setValue(sig);
  }
  submitEmployeeForm(): void {
    this.mainFormService.prepareFormForSubmit();
  }
}
