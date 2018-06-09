import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { AccountReceiveTransfer } from '../../models/account-receive-transfer';

@IonicPage({
  name: 'account-transfer-confirm'
})
@Component({
  selector: 'page-account-transfer-confirm',
  templateUrl: 'account-transfer-confirm.html',
})
export class AccountTransferConfirmPage {
  seller: Sellers
  accountReceiveTransfer: AccountReceiveTransfer
  CancelTransfer: string
  ConfirmTransfer: string
  BackPage: string
  transferAmount: number
  name_transfer: string
  mobile_transfer: string
  image_transfer: string
  name_receive_transfer: string
  mobile_receive_transfer: string
  image_receive_transfer: string  

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.CancelTransfer = 'account-balance'
    this.BackPage = 'account-transfer'
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {}
    this.accountReceiveTransfer = JSON.parse(localStorage.getItem('AccountReceiveTransfer')) || {}
    this.transferAmount = JSON.parse(localStorage.getItem('CashInput')) || 0
  }

  ionViewDidLoad() {
    this.name_transfer = `${this.seller.name} ${this.seller.last_name}`
    this.mobile_transfer = this.seller.mobile
    this.image_transfer = this.seller.image_url
    this.name_receive_transfer = `${this.accountReceiveTransfer.name} ${this.accountReceiveTransfer.last_name}`
    this.mobile_receive_transfer = this.accountReceiveTransfer.mobile
    this.image_receive_transfer = this.accountReceiveTransfer.image_url
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
            this.navCtrl.push('account-transfer-result')
          }
        }
      ]
    });
    alert.present();
  }

}
