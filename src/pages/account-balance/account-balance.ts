import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'account-balance'
})
@Component({
  selector: 'page-account-balance',
  templateUrl: 'account-balance.html',
})
export class AccountBalancePage {

  AccountPerform: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.AccountPerform ='account-perform'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountBalancePage');
  }

}
