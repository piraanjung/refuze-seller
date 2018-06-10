import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { LoadingPageProvider } from '../../providers/loading-page';

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
  label_balance: number
  balance_less_than: number
  mobile_receive_transfer: string
  params: Object
  BackPage: string
  NextPage: string

  constructor(
    private navCtrl: NavController,
    private loading: LoadingPageProvider,
    private accountSaving: AccountSavingProvider
  ) {
    this.BackPage = 'account-perform'
    this.NextPage = 'account-transfer-confirm'
    this.balance = 0
    this.label_balance = 0
    this.params = { cash_input: this.cash_input }
    this.mobile_receive_transfer = ''
  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {}
    this.seller_name = `${this.seller.name} ${this.seller.last_name}`
    this.mobile = this.seller.mobile
    this.image = this.seller.image_url
    this.cash_input = 0
    this.balance_less_than = 100

    this.getAccountSaving()
  }

  getAccountSaving() {
    let loading = this.loading.loading()
    let user_id = this.seller.id || 0
    loading.present()
    this.accountSaving.getAccountSavingBalance(user_id).subscribe(res => {
      this.balance = res.balance
      this.label_balance = res.balance
      loading.dismiss()
    }, err => {
      console.log(err)
      loading.dismiss()
    })
  }

  getUserProfileReceiveTransfer() {
    let loading = this.loading.loading()
    let mobile_receive_transfer = this.mobile_receive_transfer || ''
    loading.present()
    this.accountSaving.getUserProfileReceiveTransfer(mobile_receive_transfer)
      .subscribe(res => {

        let count = Object.keys(res).length
        if (count > 0) {
          localStorage.setItem('AccountReceiveTransfer', JSON.stringify(res))
          localStorage.setItem('CashInput', JSON.stringify(this.cash_input))
          this.navCtrl.push(this.NextPage)
        }
        loading.dismiss()
      }, err => {
        console.log(err)
        loading.dismiss()
      })
  }

}
