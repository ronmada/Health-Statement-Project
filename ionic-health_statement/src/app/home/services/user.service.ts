import { Injectable } from '@angular/core';
import { UserHttpReqService } from './user-http-req.service';
import { Employee } from '../models/employee';
import { Student } from '.././models/student';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MainFormService } from '../../home/main-form/services/main-form.service';
import { FormGroup, FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private userHttpReqService: UserHttpReqService,
    private mainFormService: MainFormService
  ) {}

  public isOkay = false;
  private user: Student | Employee;

  private form = new FormGroup({
    id: new FormControl(7147291),
  });
  public getHomePageForm(): FormGroup {
    return this.form;
  }
  public searchUser(id: string): Observable<Employee | Student> {
    return this.userHttpReqService.searchUserHTTP(id).pipe(
      tap((user) => {
        if (user === null) this.isOkay = false;
        else {
          this.setUser(user);
          this.mainFormService.setupForm(this.user);
          this.isOkay = true;
        }
      })
    );
  }
  getUser(): Student | Employee {
    return this.user;
  }
  setUser(user: Student | Employee | null): void {
    this.user = user;
  }
  resetUserForm(): void {
    this.form.reset();
    this.user = null;
  }
}
