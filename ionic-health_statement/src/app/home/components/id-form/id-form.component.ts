import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { UserService } from '../../user.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-id-form',
  templateUrl: './id-form.component.html',
  styleUrls: ['./id-form.component.scss'],
})
export class IdFormComponent implements OnInit {
  vali = {
    minlength: 8,
    maxlength: 10,
    pattern: /[^0-9]+/,
  }
  submitButtonDisabled = true
  form = new FormGroup({
    id: new FormControl(null),
  })
  get id(): string {
    if (this.form.get('id').value === null) return ''
    return String(this.form.get('id').value)
  }
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.listenToId()
  }

  submitId() {
    if (this.id !== null) {
      this.userService.setId(this.id)
      this.router.navigate([`/home/mainform`])
    } else this.router.navigate([`/home`])
  }

  listenToId() {
    this.form.get('id').valueChanges.subscribe(() => {
      const l = this.id
      let letterFound: boolean
      l.split(',').forEach((v) => {
        letterFound = !!v.match(this.vali.pattern)
      })
      this.submitButtonDisabled = !(
        l.length >= this.vali.minlength &&
        l.length <= this.vali.maxlength &&
        !letterFound
      )
    })
  }
}
