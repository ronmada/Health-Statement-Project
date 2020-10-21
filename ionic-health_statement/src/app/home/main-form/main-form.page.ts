import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.page.html',
  styleUrls: ['./main-form.page.scss'],
})
export class MainFormPage implements OnInit {
  public employee = this.userService.employee;
  public student = this.userService.student;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    //
  }
}
