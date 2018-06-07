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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountTransferPage');
  }

}
