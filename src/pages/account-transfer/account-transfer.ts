import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';

@IonicPage({
  name: 'account-transfer'
})
@Component({
  selector: 'page-account-transfer',
  templateUrl: 'account-transfer.html',
})
export class AccountTransferPage {
  seller: Sellers
  seller_name: string
  mobile: string
  image: string
  cash_input: number
  balance: number
  balance_less_than: number
  mobile_receive_transfer: string
  params: Object
  BackPage: string
  NextPage: string
  constructor(public navCtrl: NavController, public navParams: NavParams, private accountSaving: AccountSavingProvider) {
    this.BackPage = 'account-perform'
    this.NextPage = 'account-transfer-confirm'
    this.balance = 0
    this.params = { cash_input: this.cash_input }
    this.mobile_receive_transfer =''
  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {};
    this.seller_name = `${this.seller.name} ${this.seller.last_name}`
    this.mobile = this.seller.mobile
    this.image = this.seller.image_url
    this.cash_input = 0
    this.balance_less_than = 100
    this.getAccountSaving()
  }

  getAccountSaving() {
    let user_id = this.seller.id || 0
    this.accountSaving.getAccountSavingBalance(user_id).subscribe(res => {
      this.balance = res.balance
    }, err => {
      console.log(err)
    })
  }

  getUserProfileReceiveTransfer() {
    let mobile_receive_transfer = this.mobile_receive_transfer || ''
    this.accountSaving.getUserProfileReceiveTransfer(mobile_receive_transfer).subscribe(res => {
      console.log(res)

      let count = Object.keys(res).length
      if (count > 0) {
        localStorage.setItem('UserProfileReceiveTransfer', JSON.stringify(res))
        this.navCtrl.push(this.NextPage)
      }
    }, err => {
      console.log(err)
    })
  }

}
