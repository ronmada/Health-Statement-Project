import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SignatureService {
  private signatureSource = new BehaviorSubject<string>(null);
  private signature = this.signatureSource.asObservable();
  private checkFlagSource = new BehaviorSubject<boolean>(false);
  private checkFlag = this.checkFlagSource.asObservable();

  public setSignature(canvasImg: string): void {
    this.signatureSource.next(canvasImg);
  }
  public getSig(): Observable<string> {
    return this.signature;
  }
  public clearSignature(): void {
    this.signatureSource.next(null);
  }

  public getCheckFlag(): Observable<boolean> {
    return this.checkFlag;
  }
  public setCheckFlag(checkFlag: boolean): void {
    this.checkFlagSource.next(checkFlag);
  }
}
