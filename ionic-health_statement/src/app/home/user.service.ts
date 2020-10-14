import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private id: string = null
  private idType: string = 'formStudent'

  // setId(id: string): void {
  //   this.idSource.next(id)
  // }
  setId(id: string): void {
    this.id = id
  }
  setIdType(): void {
    this.idType = 'formStudent'
  }
  getIdType() {
    return this.idType
  }
  getId(): string {
    return this.id
  }
}
