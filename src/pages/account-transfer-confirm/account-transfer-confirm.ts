import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage({
  name: 'account-transfer-confirm'
})
@Component({
  selector: 'page-account-transfer-confirm',
  templateUrl: 'account-transfer-confirm.html',
})
export class AccountTransferConfirmPage {

  CancelTransfer: string
  ConfirmTransfer: string
  BackPage: string
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.CancelTransfer = 'account-balance'
    this.BackPage = 'account-transfer'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountTransferConfirmPage');
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'กรอกหมายเลขรหัสลับ',
      inputs: [
        {
          name: 'username',
          placeholder: 'กรอกหมายเลขรหัสลับ'
        }
      ],
      buttons: [
        {
          text: 'ปิด',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: data => {
            // do something...
          }
        }
      ]
    });
    alert.present();
  }

}
