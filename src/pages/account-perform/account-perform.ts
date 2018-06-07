import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'account-perform'
})
@Component({
  selector: 'page-account-perform',
  templateUrl: 'account-perform.html',
})
export class AccountPerformPage {
  AccountTransfer: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.AccountTransfer = 'account-transfer'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPerformPage');
  }

}
