import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PurchaseItemsMenu } from "../../models/purchase-items-menu";

@IonicPage({
  name: 'main-menu-purchase-items',
  segment: 'main-menu-purchase-items'
})
@Component({
  selector: 'page-main-menu-purchase-items',
  templateUrl: 'main-menu-purchase-items.html',
})
export class MainMenuPurchaseItemsPage {
  cards: PurchaseItemsMenu[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cards = [
      { img: './assets/imgs/logo.png', name: 'ค้นหาผู้ขายขยะ', link: 'find-buyers' },
      { img: './assets/imgs/logo.png', name: 'ประวัติรับซื้อขยะ', link: '#' },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainMenuPurchaseItemsPage');
  }

}
