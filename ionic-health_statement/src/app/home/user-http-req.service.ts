import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from './models/employee';
import { Student } from './models/student';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserHttpReqService {
  private URL = environment.URL;

  constructor(private http: HttpClient) {}

  getIdType(id: string): Observable<Employee | Student> {
    // id = '2688373';

    const params = new HttpParams().set('id', id);
    console.log('ON SERVICE GET ID TYPE');
    return this.http.get<Employee | Student>(`${this.URL}/userLookUp`, {
      params: params,
    });
  }
}
