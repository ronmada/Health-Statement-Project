import { Injectable } from '@angular/core';
import { UserHttpReqService } from './user-http-req.service';
import { Employee } from './models/employee';
import { Student } from './models/student';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private userHttpReqService: UserHttpReqService) {}
  public isOkay = false;
  public employee: Employee;
  public student: Student;

  public searchUser(id: string): Observable<Employee | Student> {
    return this.userHttpReqService.searchUserHTTP(id).pipe(
      tap((user) => {
        if (user === null) this.isOkay = false;
        else {
          this.isOkay = true;
          if (user.userType === 'Employee') {
            this.employee = user as Employee;
            this.student = null;
          } else if (user.userType === 'Student') {
            this.student = user as Student;
            this.employee = null;
          }
        }
      })
    );
  }
}
