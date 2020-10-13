import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UserService } from '../user.service'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-id-form',
  templateUrl: './id-form.component.html',
  styleUrls: ['./id-form.component.scss'],
})
export class IdFormComponent implements OnInit {
  idType: string
  id__: string = null
  form = new FormGroup({
    id: new FormControl('', [
      Validators.minLength(5),
      Validators.maxLength(10),
      Validators.required,
    ]),
  })
  get id(): string {
    if (this.form.get('id').value === null) return ''
    return String(this.form.get('id').value)
  }
  constructor(private userService: UserService, private router: Router) {}

  submitId() {
    console.log(this.id)
    const id = this.form.get('id').value
    if (id !== null) {
      this.userService.setId(id)
      const idType = this.userService.getIdType()
      this.router.navigate([`/home/${idType}`])
    }
  }
  ngOnInit() {
    this.listenToId()
  }
  listenToId() {
    this.form.get('id').valueChanges.subscribe((id_) => {
      console.log(this.id.length)
    })
  }
}
