import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MainFormHttpReqService {
  private URL = environment.URL;

  constructor(private http: HttpClient) {}

  public sendFormToServer(form: Record<string, unknown>): void {
    console.log(form);
    this.http
      .post(`${this.URL}/formCreator`, form)
      .subscribe((d) => console.log(d));
  }
}
