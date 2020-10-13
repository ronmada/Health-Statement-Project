import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private idSource = new BehaviorSubject<string>(null)
  id = this.idSource.asObservable()
  private idType: string = 'formStudent'

  setId(id: string): void {
    this.idSource.next(id)
  }

  setIdType(): void {
    this.idType = 'formStudent'
  }
  getIdType(){
    return this.idType
  }
}
