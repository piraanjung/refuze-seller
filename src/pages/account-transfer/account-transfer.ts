import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sellers } from '../../models/sellers';

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
  cash: number
  BackPage: string
  NextPage: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.BackPage = 'account-perform'
    this.NextPage = 'account-transfer-confirm'
    this.cash = 900
  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {};
    this.seller_name = `${this.seller.name} ${this.seller.last_name}`
    this.mobile = this.seller.mobile
    this.image = this.seller.image_url
  }

}
