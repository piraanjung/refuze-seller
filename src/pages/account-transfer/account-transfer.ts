import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'account-transfer'
})
@Component({
  selector: 'page-account-transfer',
  templateUrl: 'account-transfer.html',
})
export class AccountTransferPage {
  BackPage: string
  NextPage: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.BackPage = 'account-perform'
    this.NextPage = 'account-transfer-confirm'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountTransferPage');
  }

}
