import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { UserService } from '../user.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-id-form',
  templateUrl: './id-form.component.html',
  styleUrls: ['./id-form.component.scss'],
})
export class IdFormComponent {
  form = new FormGroup({
    id: new FormControl(),
  })

  constructor(private userService: UserService, private router: Router) {}

  submitId() {
    console.log(this.form.get('id').value)
    this.userService.setId(this.form.get('id').value)
    this.router.navigate(['/home/mainform']);
  }
}
