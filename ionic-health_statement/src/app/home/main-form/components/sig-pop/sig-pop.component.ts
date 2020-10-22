import { Component, Output, EventEmitter } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SignatureComponent } from '../signature/signature.component';
import { SignatureService } from '../../services/signature.service';

@Component({
  selector: 'app-sig-pop',
  templateUrl: './sig-pop.component.html',
  styleUrls: ['./sig-pop.component.scss'],
})
export class SigPopComponent {
  @Output() private savedSigEvent = new EventEmitter<string>();
  public buttonColor: string;
  constructor(
    private signatureService: SignatureService,
    private popoverController: PopoverController
  ) {
    this.buttonColor = 'warning';
  }

  public async presentPopover($event: Event): Promise<void> {
    const popover = await this.popoverController.create({
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
    popover.onDidDismiss().then((res) => {
      if (res.data != undefined) {
        this.buttonColor = 'success';
        this.savedSigEvent.emit(res.data);
        this.signatureService.saveSignature(res.data);
      }
    });
    return await popover.present();
  }
}
