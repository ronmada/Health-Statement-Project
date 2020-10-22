import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alert: HTMLIonAlertElement;
  constructor(private alertCtrl: AlertController) {}

  async formSubmittedAlert(): Promise<void> {
    this.alert = await this.alertCtrl.create({
      header: 'הטופס נשלח בהצלחה',
      message: 'להוריד את הטופס PDF?',
      buttons: [
        {
          text: 'לא',
          role: 'cancel',
        },
        {
          text: 'כן',
          handler: () => {
            this.alert.dismiss('hi');
          },
        },
      ],
    });

    this.alert.onDidDismiss().then((res) => {
      // if (res.data != undefined) {
      //   this.buttonColor = 'success';
      //   this.savedSigEvent.emit(res.data);
      //   this.signatureService.saveSignature(res.data);
      // }
      this.downloadPDFForm()
      console.log('hello');
      console.log(res.data);
    });
     await this.alert.present();
  }
  downloadPDFForm(): void {
    console.log('lol');
  }
}
