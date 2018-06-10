import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { AccountReceiveTransfer } from '../../models/account-receive-transfer';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AlertBoxProvider } from '../../providers/alert-box';

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
  labelAmount: number

  account_saving_transfer: number
  user_id_transfer: number
  user_receive_id: number
  name_transfer: string
  mobile_transfer: string
  image_transfer: string

  account_saving_receive_id: number
  name_receive_transfer: string
  mobile_receive_transfer: string
  image_receive_transfer: string

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private loading: LoadingPageProvider,
    private alertBox: AlertBoxProvider,
    private accountSaving: AccountSavingProvider
  ) {
    this.CancelTransfer = 'account-balance'
    this.BackPage = 'account-transfer'
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {}
    this.accountReceiveTransfer = JSON.parse(localStorage.getItem('AccountReceiveTransfer')) || {}
    this.transferAmount = JSON.parse(localStorage.getItem('CashInput')) || 0
    this.labelAmount = JSON.parse(localStorage.getItem('CashInput')) || 0
  }

  ionViewDidLoad() {
    this.account_saving_transfer = this.seller.account_saving_id
    this.user_id_transfer = this.seller.id
    this.name_transfer = `${this.seller.name} ${this.seller.last_name}`
    this.mobile_transfer = this.seller.mobile
    this.image_transfer = this.seller.image_url

    this.account_saving_receive_id = this.accountReceiveTransfer.account_saving_id
    this.user_receive_id = this.accountReceiveTransfer.id
    this.name_receive_transfer = `${this.accountReceiveTransfer.name} ${this.accountReceiveTransfer.last_name}`
    this.mobile_receive_transfer = this.accountReceiveTransfer.mobile
    this.image_receive_transfer = this.accountReceiveTransfer.image_url
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'กรอกหมายเลขรหัสลับ',
      inputs: [
        {
          name: 'transfer_passwords',
          type: 'password',
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
            this.validateTransferConfirm(data)
          }
        }
      ]
    });
    alert.present();
  }

  private validateTransferConfirm(data) {
    let loading = this.loading.loading()
    loading.present()
    this.accountSaving.validateTransferConfirm({
      user_transfer_id: this.user_id_transfer,
      user_recieve_id: this.user_receive_id,
      account_saving_transfer_id: this.account_saving_transfer,
      account_saving_receive_id: this.account_saving_receive_id,
      transfer_passwords: data.transfer_passwords,
      amount: this.transferAmount
    })
      .subscribe(res => {
        if (res.status == 200 && res.body == 1) {
          this.navCtrl.push('account-transfer-result')
        } else if (res.status == 204 && res.body == 0) {
          this.alertBox.showAlert('ไม่พบข้อมูลของผู้รับโอนค่ะ')
        } else {
          this.alertBox.showAlert('ไม่สามารถดำเนินรายการได้ กรุณาลองใหม่ภายหลังต่ะ')
        }
        loading.dismiss()
      }, err => {
        console.log(err)
        loading.dismiss()
      })
  }

}
