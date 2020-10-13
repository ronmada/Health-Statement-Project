import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.page.html',
  styleUrls: ['./main-form.page.scss'],
})
export class MainFormPage implements OnInit {
  haveId: boolean
  //idType = 'Employee' || 'Student'
  idType: string = null
  constructor(private userService: UserService, private router: Router) {
    this.userService.id.subscribe((idValue) => (this.haveId = !!idValue))
  }

  ngOnInit() {
    if (!this.haveId) this.navigateBack()
    else {
      const idType = this.userService.getIdType()
      if (idType !== 'formStudent' && idType !== 'formEmployee')
        this.navigateBack()
      else {
        this.idType = idType
      }
    }
  }
  async navigateBack() {
    await this.router.navigate(['/home'])
  }
  getIdType() {
    console.log('hello')
  }
}