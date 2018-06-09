import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { AccountReceiveTransfer } from '../../models/account-receive-transfer';

@IonicPage({
  name: 'account-transfer-result'
})
@Component({
  selector: 'page-account-transfer-result',
  templateUrl: 'account-transfer-result.html',
})
export class AccountTransferResultPage {
  seller: Sellers
  accountReceiveTransfer: AccountReceiveTransfer
  AccountTransfer: string
  AccountBalance: string
  transferAmount: number
  user_id_transfer: number
  name_transfer: string
  mobile_transfer: string
  image_transfer: string
  name_receive_transfer: string
  mobile_receive_transfer: string
  image_receive_transfer: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.AccountTransfer = 'account-transfer'
    this.AccountBalance = 'account-balance'
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {}
    this.accountReceiveTransfer = JSON.parse(localStorage.getItem('AccountReceiveTransfer')) || {}
    this.transferAmount = JSON.parse(localStorage.getItem('CashInput')) || 0
  }

  ionViewDidLoad() {
    this.user_id_transfer = this.seller.id
    this.name_transfer = `${this.seller.name} ${this.seller.last_name}`
    this.mobile_transfer = this.seller.mobile
    this.image_transfer = this.seller.image_url
    this.name_receive_transfer = `${this.accountReceiveTransfer.name} ${this.accountReceiveTransfer.last_name}`
    this.mobile_receive_transfer = this.accountReceiveTransfer.mobile
    this.image_receive_transfer = this.accountReceiveTransfer.image_url
  }

}
