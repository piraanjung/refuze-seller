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

  cards: Object[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cards = [
      {img: './assets/imgs/logo.png', name:'ค้นหาผู้ขายขยะ'},
      {img: './assets/imgs/logo.png', name:'ประวัติรับซื้อขยะ'},
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseItemsPage');
  }

}
