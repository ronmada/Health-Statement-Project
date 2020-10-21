import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.page.html',
  styleUrls: ['./main-form.page.scss'],
})
export class MainFormPage {
  public user = this.userService.user__;
  constructor(private userService: UserService) {}
}
