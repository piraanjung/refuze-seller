import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { Sellers } from '../../models/sellers';

@IonicPage({
  name: 'account-withdraw-result'
})
@Component({
  selector: 'page-account-withdraw-result',
  templateUrl: 'account-withdraw-result.html',
})
export class AccountWithdrawResultPage {

  seller: Sellers;
  AccountWithdraw: string;
  AccountBalance: string;
  transferAmount: number;
  name_transfer: string;
  mobile_transfer: string;
  image_transfer: string;
  name_receive_transfer: string;
  mobile_receive_transfer: string;
  image_receive_transfer: string;

  constructor(
    private menuCtrl: MenuController,
    private navCtrl: NavController
  ) {
    this.AccountWithdraw = 'account-withdraw';
    this.AccountBalance = 'account-balance';
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {};
    this.transferAmount = JSON.parse(localStorage.getItem('CashInput')) || 0;
    this.menuCtrl.enable(false, 'menu-side-bar');
  }

  ionViewDidLoad() {
    this.name_transfer = `${this.seller.name} ${this.seller.last_name}`;
    this.mobile_transfer = this.seller.mobile;
    this.image_transfer = this.seller.image_url;
  }

  openPage(page) {
    this.navCtrl.setRoot(page, {}, { animate: true, direction: 'forward' });
  }

}
