import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { LoadingPageProvider } from '../../providers/loading-page';

@IonicPage({
  name: 'account-perform'
})
@Component({
  selector: 'page-account-perform',
  templateUrl: 'account-perform.html',
})
export class AccountPerformPage {
  AccountTransfer: string
  seller: Sellers
  seller_name: string
  mobile: string
  image: string
  balance: number
  constructor(
    private loading: LoadingPageProvider,
    private accountSaving: AccountSavingProvider) {
    this.AccountTransfer = 'account-transfer'
    this.balance = 0
  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {};
    this.seller_name = `${this.seller.name} ${this.seller.last_name}`
    this.mobile = this.seller.mobile
    this.image = this.seller.image_url
    this.getAccountSaving()
  }

  getAccountSaving() {
    let loading = this.loading.loading()
    let user_id = this.seller.id || 0
    loading.present()
    this.accountSaving.getAccountSavingBalance(user_id).subscribe(res => {
      this.balance = res.balance
      loading.dismiss()
    }, err => {
      console.log(err)
      loading.dismiss()
    })
  }

}
