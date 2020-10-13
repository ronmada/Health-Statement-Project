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
  idType: string
  form = new FormGroup({
    id: new FormControl(null),
  })
  constructor(private userService: UserService, private router: Router) {}

  submitId() {
    const id = this.form.get('id').value
    if (id !== null) {
      this.userService.setId(id)
      const idType = this.userService.getIdType()
      this.router.navigate([`/home/${idType}`])
    }
  }
}
