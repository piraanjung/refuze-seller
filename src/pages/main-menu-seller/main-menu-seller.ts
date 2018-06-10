import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
      "title_description": "",
      "description": "",
      "buttonText": "",
      "headerImage": "assets/images/background/sell-garbage.png",
      "title": "ขายขยะ",
      "navCtrl": "sell-trash",
    },
    {
      "title_description": "",
      "description": "",
      "buttonText": "",
      "headerImage": "assets/images/background/garbagebank.png",
      "title": "ธนาคารขยะ",
      "navCtrl": "account-balance",
    },
    {
      "title_description": "",
      "description": "",
      "buttonText": "PROCEED",
      "headerImage": "assets/images/background/shoppingcart.png",
      "title": "ซื้อสินค้า ออนไลน์",
      "navCtrl": "shopping-cart-main",
    },
    {
      "title_description": "",
      "description": "",
      "buttonText": "",
      "headerImage": "assets/images/background/localproduct.png",
      "title": "ซื้อสินค้าในโรงเรียน",
      "navCtrl": "buy-local-product",
    },
    {
      "title_description": "",
      "description": "",
      "buttonText": "",
      "headerImage": "assets/images/background/estimated_cost.png",
      "title": "ราคากลางขยะ",
      "navCtrl": "find-items",
    },
    {
      "title_description": "",
      "description": "",
      "buttonText": "",
      "headerImage": "assets/images/background/sellhistory.png",
      "title": "ประวัติการขายขยะ",
      "navCtrl": "sell-history",
    }
  ]

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    this.navCtrl.push(item.navCtrl)
  }

}
