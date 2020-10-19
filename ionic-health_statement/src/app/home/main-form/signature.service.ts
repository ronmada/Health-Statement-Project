import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignatureService {
  private signature: string = null;

  public saveSignature(canvasImg: string): void {
    this.signature = canvasImg;
  }

  public getSignature(): string {
    return this.signature;
  }

  public clearSig(): void {
    this.signature = null;
  }
}
