import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';

@IonicPage({
  name: 'account-balance'
})
@Component({
  selector: 'page-account-balance',
  templateUrl: 'account-balance.html',
})
export class AccountBalancePage {

  AccountPerform: string
  seller: Sellers
  seller_name: string
  mobile: string
  image: string
  constructor(public navCtrl: NavController, public navParams: NavParams, private accountSaving: AccountSavingProvider) {
    this.AccountPerform = 'account-perform'
  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {};
    this.seller_name = `${this.seller.name} ${this.seller.last_name}`
    this.mobile = this.seller.mobile
    this.image = this.seller.image_url
    this.getAccountSaving()
  }

  getAccountSaving() {
    let user_id = this.seller.id || 0
    this.accountSaving.getAccountSavingBalance(user_id).subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }

}
