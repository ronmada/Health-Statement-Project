import { Injectable } from '@angular/core';
import { UserHttpReqService } from './user-http-req.service';
import { Employee } from './models/employee';
import { Student } from './models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private userHttpReqService: UserHttpReqService) {}
  private id: string = null;
  private idType = 'nothing';
  erro =''
  setId(id: string): void {
    this.id = id;
    console.log('ID: ',id)
    this.userHttpReqService.getIdType(id).subscribe((user) => {
      if (user.userType === 'Employee') this.idType = 'Employee';
      else if (user.userType === 'Student') this.idType = 'Student';
      console.log(this.idType);
    },err=>{
      console.log(err.statusText)
      this.erro = err
    });
  }

  getId(): string {
    return this.id;
  }

  // setIdType(id: HttpParams): void {
  //   // this.idType = this.userHttpReqService.setIdType(id)
  //   // this.idType = 'formStudent';
  // }
  getIdType(): Observable<Employee | Student> {
   return this.userHttpReqService.getIdType(this.id)
  }
}
