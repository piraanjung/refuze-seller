import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'account-transfer-result'
})
@Component({
  selector: 'page-account-transfer-result',
  templateUrl: 'account-transfer-result.html',
})
export class AccountTransferResultPage {

  AccountTransfer: string
  AccountBalance: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.AccountTransfer = 'account-transfer'
    this.AccountBalance = 'account-balance'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountTransferResultPage');
  }

}
