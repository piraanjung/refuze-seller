import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name:'purchase-items'
})
@Component({
  selector: 'page-purchase-items',
  templateUrl: 'purchase-items.html',
})
export class PurchaseItemsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseItemsPage');
  }

}
