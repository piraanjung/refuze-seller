import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'account--withdraw-result'
})
@Component({
  selector: 'page-account-withdraw-result',
  templateUrl: 'account-withdraw-result.html',
})
export class AccountWithdrawResultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountWithdrawResultPage');
  }

}
