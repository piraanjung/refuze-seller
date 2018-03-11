import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'purchase-items-modal',
  templateUrl: 'purchase-items-modal.html',
})
export class PurchaseItemsModal {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseItemsModal');
  }

}
