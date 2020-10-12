import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form = new FormGroup({
    id: new FormControl(),
  })
  submitId() {
    console.log(this.form.get('id').value)
  }
  constructor() {}
}
