import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  name: 'purchase-items-modal'
})
@Component({
  selector: 'page-purchase-items-modal',
  templateUrl: 'purchase-items-modal.html',
})
export class PurchaseItemsModalPage {

  constructor(private viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseItemsModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss('close');
  }

}
