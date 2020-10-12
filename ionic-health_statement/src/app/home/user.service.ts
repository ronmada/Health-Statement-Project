import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  id: string = null

  setId(id: string): void {
    this.id = id
  }
  getId(): string {
    return this.id
  }
}
