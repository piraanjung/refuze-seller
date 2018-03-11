import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Item } from '../../models/item/item';

@IonicPage({
  name: 'purchase-items-modal'
})
@Component({
  selector: 'page-purchase-items-modal',
  templateUrl: 'purchase-items-modal.html',
})
export class PurchaseItemsModalPage {
  item: Item
  id: number
  name: string
  price: number
  amount: number
  unit_name: string
  balance: number

  constructor(private viewCtrl: ViewController, public navParams: NavParams) {
    this.amount = 1
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('data')
    console.log(this.item)
    this.name = this.item.name
    this.unit_name = this.item.unit_name
    this.price = this.item.price
    this.balance = (this.amount * this.price)

    console.log(this.balance)
  }

  dismiss() {
    this.viewCtrl.dismiss('close');
  }

}
