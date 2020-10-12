import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.page.html',
  styleUrls: ['./main-form.page.scss'],
})
export class MainFormPage implements OnInit{
  haveId =!!this.userService.getId()

  // id = this.userService.getId()
  constructor(private userService: UserService, private router: Router) {
    // this.haveId= !!this.userService.getId()
    // this.haveId =!!this.userService.id
    console.log(this.haveId)
  }
  ngOnInit(){
    if (!this.haveId) this.router.navigate(['/home'])
    console.log(this.haveId)
  }
}
