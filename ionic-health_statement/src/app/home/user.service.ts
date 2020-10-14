import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private id: string = null;
  private idType = 'formStudent';

  setId(id: string): void {
    this.id = id;
  }
  setIdType(): void {
    this.idType = 'formStudent';
  }
  getIdType(): string {
    return this.idType;
  }
  getId(): string {
    return this.id;
  }
}
