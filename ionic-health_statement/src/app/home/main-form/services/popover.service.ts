import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { SignatureComponent } from '../components/signature/signature.component';
import { SignatureService } from './signature.service';
@Injectable({
  providedIn: 'root',
})
export class PopoverService {
  private buttonColor: string;
  public popover: HTMLIonPopoverElement;
  constructor(
    private popoverController: PopoverController,
    private signatureService: SignatureService
  ) {
    this.buttonColor = 'danger';
  }
  public getButtonColor(): string {
    return this.buttonColor;
  }
  async signaturePopOver($event: Event): Promise<void> {
    this.popover = await this.popoverController.create({
      component: SignatureComponent,
      cssClass: 'my-custom-class',
      event: $event,
      translucent: true,
      // backdropDismiss: false,
      componentProps: {
        width: 250,
        height: 204,
      },
    });
    this.signatureService.getSig().subscribe((sig) => {
      this.signatureService
        .getCheckFlag()
        .pipe(debounce(() => interval(300)))
        .subscribe((checkflag) => {
          console.log('hello');
          if (checkflag && sig) this.buttonColor = 'success';
          else if ((!checkflag && sig) || checkflag)
            this.buttonColor = 'warning';
          else this.buttonColor = 'danger';
        });
    });
    this.popover.onDidDismiss().then((res) => {
      if (res.data != undefined) {
        this.signatureService.setSignature(res.data);
      }
      this.signatureService.getSig().subscribe((sig) => {
        if (!sig) this.signatureService.setCheckFlag(false);
      });
    });

    return await this.popover.present();
  }
}
