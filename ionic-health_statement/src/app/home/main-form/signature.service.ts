import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class SignatureService {
  private signature: string = null

  saveSignature(canvasImg: string): void {
    this.signature = canvasImg
  }

  getSignature(): string {
    return this.signature
  }
  
  clearSig(): void {
    this.signature = null
  }
}
