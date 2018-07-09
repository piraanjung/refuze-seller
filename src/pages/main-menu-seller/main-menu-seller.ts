import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  name: 'main-menu-seller'
})
@Component({
  selector: 'page-main-menu-seller',
  templateUrl: 'main-menu-seller.html',
})
export class MainMenuSellerPage {

  data: any = [
    {
      "headerImage": "assets/images/background/sell-garbage.png",
      "title": "ขายขยะ",
      "navCtrl": "sell-trash",
    },
    {
      "headerImage": "assets/images/background/garbagebank.png",
      "title": "ธนาคารขยะ",
      "navCtrl": "account-balance",
    },
    {
      "headerImage": "assets/images/background/shoppingcart.png",
      "title": "ซื้อสินค้า ออนไลน์",
      "navCtrl": "shopping-cart-main",
    },
    {
      "headerImage": "assets/images/background/localproduct.png",
      "title": "ซื้อสินค้าในโรงเรียน",
      "navCtrl": "buy-local-product",
    },
    {
      "headerImage": "assets/images/background/estimated_cost.png",
      "title": "ราคากลางขยะ",
      "navCtrl": "find-items",
    },
    {
      "headerImage": "assets/images/background/sellhistory.png",
      "title": "ประวัติการขายขยะ",
      "navCtrl": "sell-history",
    }
  ]

  constructor(private navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    console.log(item)
    this.navCtrl.setRoot(item.navCtrl, {}, { animate: true, direction: 'forward' })
  }

}
