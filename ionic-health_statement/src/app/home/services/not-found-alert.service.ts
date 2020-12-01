import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class NotFoundAlertService {
  constructor(private alertCtrl: AlertController) {}

  async idNotFound(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'תעודת זהות לא נמצאה',
      message: 'לא נמצא משתמש עם התעודה המזהה הזו במאגר',
      backdropDismiss: true,
      buttons: [
        {
          text: 'אישור',
          role: 'cancel',
          handler: () => {
            console.log('click on no button or backdrop');
          },
        },
      ],
    });
    return await alert.present();
  }
}
