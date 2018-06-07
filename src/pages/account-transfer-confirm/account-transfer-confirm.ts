import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'account-transfer-confirm'
})
@Component({
  selector: 'page-account-transfer-confirm',
  templateUrl: 'account-transfer-confirm.html',
})
export class AccountTransferConfirmPage {

  CancelTransfer: string
  ConfirmTransfer: string
  BackPage: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.CancelTransfer ='account-balance'
    this.ConfirmTransfer =''
    this.BackPage ='account-transfer'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountTransferConfirmPage');
  }

}
