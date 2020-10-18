import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { Student } from '../models/student';
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.page.html',
  styleUrls: ['./main-form.page.scss'],
})
export class MainFormPage implements OnInit {
  idType: string = null; // 'Employee' || 'Student'
  user$ : Observable<Student | Employee>;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getIdType();
  }
  private  getIdType() {
    this.user$ = this.userService.getIdType();
    console.log('222');
    const idType = this.userService.getIdType();
    console.log('ID TYPE:  ', idType);
    // if (idType !== 'Student' && idType !== 'Employee') {
    //   this.router.navigate(['/home']);
    // } else {
    //   this.idType = idType;
    // }
  }
}
