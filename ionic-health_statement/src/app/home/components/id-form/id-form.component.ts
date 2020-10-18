import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-id-form',
  templateUrl: './id-form.component.html',
  styleUrls: ['./id-form.component.scss'],
})
export class IdFormComponent implements OnInit {
  vali = {
    minlength: 7,
    maxlength: 7,
    pattern: /[^0-9]+/,
  };
  submitButtonDisabled = false;
  form = new FormGroup({
    id: new FormControl(2688373),
  });
  get id(): string {
    if (this.form.get('id').value === null) {
      return '';
    }
    return String(this.form.get('id').value);
  }
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.listenToId();
  }

  submitId(): void {
    if (this.id !== null) {
      this.userService.setId(this.id);
      console.log('111');
      this.router.navigate([`/home/mainform`]);
    } else {
      this.router.navigate([`/home`]);
    }
  }

  listenToId(): void {
    this.form.get('id').valueChanges.subscribe(() => {
      const l = this.id;
      let letterFound: boolean;
      l.split(',').forEach((v) => {
        letterFound = !!v.match(this.vali.pattern);
      });
      this.submitButtonDisabled = !(
        l.length >= this.vali.minlength &&
        l.length <= this.vali.maxlength &&
        !letterFound
      );
    });
  }
}
