import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { NotFoundAlertService } from '../home/services/not-found-alert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public form: FormGroup;
  public submitButtonDisabled: boolean;
  public vali = {
    minlength: 7,
    maxlength: 7,
    pattern: /[^0-9]+/,
  };
  constructor(
    private notFoundAlertService: NotFoundAlertService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.submitButtonDisabled = false;
    this.form = this.userService.getHomePageForm();
    this.listenToId();
    console.log('okay');
  }

  get id(): string {
    if (this.form.get('id').value === null) {
      return '';
    }
    return String(this.form.get('id').value);
  }

  public submitId(): void {
    this.userService.searchUser(this.id).subscribe((elem) => {
      if (this.userService.isOkay) {
        this.router.navigate([`/home/mainform`]);
        console.log(elem);
      } else this.notFoundAlertService.idNotFound();
    });
  }

  private listenToId(): void {
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
