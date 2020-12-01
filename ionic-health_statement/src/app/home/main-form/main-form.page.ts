import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.page.html',
  styleUrls: ['./main-form.page.scss'],
})
export class MainFormPage {
  constructor(public userService: UserService) {}

  backButton(): void {
    this.userService.resetUserForm()
    // this.userService.setUser(null);
  }
}
