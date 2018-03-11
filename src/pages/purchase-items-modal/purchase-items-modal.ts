import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Item } from '../../models/item';

@IonicPage({
  name: 'purchase-items-modal'
})
@Component({
  selector: 'page-purchase-items-modal',
  templateUrl: 'purchase-items-modal.html',
})
export class PurchaseItemsModalPage {
  item: Item
  constructor(private viewCtrl: ViewController, public navParams: NavParams) { }

  ionViewWillLoad() {
    this.item = this.navParams.get('data')
    console.log(this.navParams.get('data'))
    console.log('ionViewDidLoad PurchaseItemsModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss('close');
  }

}
