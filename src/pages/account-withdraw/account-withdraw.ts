import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'account-withdraw'
})
@Component({
  selector: 'page-account-withdraw',
  templateUrl: 'account-withdraw.html',
})
export class AccountWithdrawPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountWithdrawPage');
  }

}
