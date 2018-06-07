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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPerformPage');
  }

}
