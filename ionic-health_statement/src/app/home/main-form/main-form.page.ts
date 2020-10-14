import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.page.html',
  styleUrls: ['./main-form.page.scss'],
})
export class MainFormPage implements OnInit {
  idType: string = null //'Employee' || 'Student'
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    const idType = this.userService.getIdType()
    if (idType !== 'formStudent' && idType !== 'formEmployee')
      this.router.navigate(['/home'])
    else this.idType = idType
  }
}
