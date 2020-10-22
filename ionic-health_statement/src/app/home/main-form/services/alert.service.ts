import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  // alert: HTMLIonAlertElement;
  constructor(private alertCtrl: AlertController) {}

  async formSubmittedAlert(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'הטופס נשלח בהצלחה',
      message: 'להוריד את הטופס PDF?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'לא',
          role: 'cancel',
          handler: () => {
            console.log('click on no button or backdrop');
          },
        },
        {
          text: 'כן',
          handler: () => {
            console.log('clicked on yes button');
            this.downloadPDFForm();
          },
        },
      ],
    });
    return await alert.present();
  }
  downloadPDFForm(): void {
    console.log('lol');
  }
}
