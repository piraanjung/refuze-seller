import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sellers } from '../../models/sellers';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.AccountTransfer = 'account-transfer'
  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {};
    this.seller_name = `${this.seller.name} ${this.seller.last_name}`
    this.mobile = this.seller.mobile
    this.image = this.seller.image_url
  }

}
