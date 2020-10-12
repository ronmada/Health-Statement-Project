import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.page.html',
  styleUrls: ['./main-form.page.scss'],
})
export class MainFormPage implements OnInit {
  haveId = true
  constructor(private userService: UserService, private router: Router) {
    if(!this.userService.getId()) {
      this.haveId = false
      this.router.navigate(['/home'])
      }
  }

  ngOnInit() {
    console.log('hello')
  }
}
