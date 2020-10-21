import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Student } from "../../../models/student";
import { MainFormService } from "../../services/main-form.service";
import { UserService } from "../../../services/user.service";
@Component({
  selector: "app-form-student",
  templateUrl: "./form-student.component.html",
  styleUrls: ["./form-student.component.scss"],
})
export class FormStudentComponent implements OnInit {
  public student: Student;
  public studentForm: FormGroup;
  public guardianId: string;
  constructor(
    private mainFormService: MainFormService,
    private userService: UserService
  ) {
    this.studentForm = this.mainFormService.getForm();
    this.student = this.userService.user__ as Student;
  }
  get guardian(): string {
    return this.studentForm.get("guardian").value.id;
  }
  get institute(): string {
    return this.studentForm.get("institute").value.name;
  }
  ngOnInit(): void {
    //
  }
  public saveSig(sig: string): void {
    this.studentForm.get("signature").setValue(sig);
  }
  public submitStudentForm(): void {
    this.mainFormService.prepareFormForSubmit();
  }
}
