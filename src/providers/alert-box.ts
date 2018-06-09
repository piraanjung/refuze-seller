import { AlertController } from 'ionic-angular'
import { Injectable } from '@angular/core'

@Injectable()
export class AlertBoxProvider {
  constructor(private alertCtrl: AlertController) { }
  showAlert(subTitle: string) {
    const alert = this.alertCtrl.create({
      title: 'ระบบแจ้งเตือน',
      subTitle: subTitle,
      buttons: ['ปิด']
    });
    alert.present();
  }
}
