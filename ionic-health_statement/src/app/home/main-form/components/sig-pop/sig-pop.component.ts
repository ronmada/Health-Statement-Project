import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SignatureComponent } from '../signature/signature.component';
import { SignatureService } from '../../signature.service';

@Component({
  selector: 'app-sig-pop',
  templateUrl: './sig-pop.component.html',
  styleUrls: ['./sig-pop.component.scss'],
})
export class SigPopComponent {
  public buttonColor: string;
  constructor(
    private signatureService: SignatureService,
    private popoverController: PopoverController
  ) {
    this.buttonColor = 'warning';
  }

  public async presentPopover(ev: Event): Promise<void> {
    const popover = await this.popoverController.create({
      component: SignatureComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      backdropDismiss: false,
      componentProps: {
        width: 250,
        height: 204,
      },
    });
    popover.onDidDismiss().then((res) => {
      if (res.data !== undefined) {
        this.buttonColor = 'success';
        this.signatureService.saveSignature(res.data);
        // this.form.get('signature').setValue(res.data)
      }
    });
    return await popover.present();
  }
}
