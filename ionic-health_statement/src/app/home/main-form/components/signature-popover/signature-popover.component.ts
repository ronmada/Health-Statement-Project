import { Component } from '@angular/core'
import { PopoverController } from '@ionic/angular'
import { SignatureComponent } from '../signature/signature.component'
import { SignatureService } from '../../signature.service'

@Component({
  selector: 'app-signature-popover',
  templateUrl: './signature-popover.component.html',
  styleUrls: ['./signature-popover.component.scss'],
})
export class SignaturePopoverComponent {
  constructor(
    private signatureService: SignatureService,
    public popoverController: PopoverController
  ) {}

  async presentPopover(ev: any) {
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
    })
    popover.onDidDismiss().then((res) => {
      if (res.data !== undefined) {
        this.signatureService.saveSignature(res.data)
        // this.form.get('signature').setValue(res.data)
      }
    })
    return await popover.present()
  }
}
