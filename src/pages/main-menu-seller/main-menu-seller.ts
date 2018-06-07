import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sellers } from '../../models/sellers';

@IonicPage({
  name: 'main-menu-seller'
})
@Component({
  selector: 'page-main-menu-seller',
  templateUrl: 'main-menu-seller.html',
})
export class MainMenuSellerPage {

  user: Sellers
  data: any = [
    {
      "title_description": "Order No. 1",
      "description": "Will be shipped: 15.5.2016.",
      "buttonText": "PROCEED",
      "headerImage": "assets/images/background/17.jpg",
      "title": "ขายขยะ",
      "navCtrl": "sell-trash",
    },
    {
      "title_description": "",
      "description": "",
      "buttonText": "Click",
      "headerImage": "assets/images/background/17.jpg",
      "title": "ธนาคารขยะ",
      "navCtrl": "account-balance",
    },
    {
      "title_description": "Order No. 1",
      "description": "Will be shipped: 15.5.2016.",
      "buttonText": "PROCEED",
      "headerImage": "assets/images/background/17.jpg",
      "title": "Shoping Cart",
      "navCtrl": "shopping-cart-main",
    },
    {
      "title_description": "Order No. 1",
      "description": "Will be shipped: 15.5.2016.",
      "buttonText": "PROCEED",
      "headerImage": "assets/images/background/17.jpg",
      "title": "ซื้อสินค้าในโรงเรียน",
      "navCtrl": "buy-local-product",
    },
    {
      "title_description": "Order No. 1",
      "description": "Will be shipped: 15.5.2016.",
      "buttonText": "PROCEED",
      "headerImage": "assets/images/background/17.jpg",
      "title": "ราคากลางขยะ",
      "navCtrl": "find-items",
    },

    // {
    //   "title_description": "Order No. 1",
    //   "description": "Will be shipped: 15.5.2016.",
    //   "buttonText": "PROCEED",
    //   "headerImage": "assets/images/background/17.jpg",
    //   "title": "ค้นหาผู้รับซื้อขยะ",
    //   "navCtrl" : "find-buyers",
    // },
    // {
    //   "title_description": "Order No. 1",
    //   "description": "Will be shipped: 15.5.2016.",
    //   "buttonText": "PROCEED",
    //   "headerImage": "assets/images/background/17.jpg",
    //   "title": "วิธีคัดแยกขยะเพิ่มมูลค่า",
    //   "navCtrl" : "",
    // },
    {
      "title_description": "Order No. 1",
      "description": "Will be shipped: 15.5.2016.",
      "buttonText": "PROCEED",
      "headerImage": "assets/images/background/17.jpg",
      "title": "ประวัติการขายขยะ",
      "navCtrl": "sell-history",
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = JSON.parse(localStorage.getItem('sellerProfile'));
  }

  ionViewDidLoad() {
    console.log(this.user)
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    this.navCtrl.push(item.navCtrl)
  }

}
