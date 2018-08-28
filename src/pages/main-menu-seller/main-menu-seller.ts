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
      "title": "แก้มป่อง ออนไลน์",
      "navCtrl": "shopping-cart-main",
    },
    {
      "headerImage": "assets/images/background/localproduct.png",
      "title": "สินค้าในโรงเรียน",
      "navCtrl": "buy-local-product",
    },
    {
      "headerImage": "assets/images/background/estimated_cost.png",
      "title": "ราคาขยะวันนี้",
      "navCtrl": "find-items",
    },
    {
      "headerImage": "assets/images/background/sellhistory.png",
      "title": "ประวัติการขายขยะ",
      "navCtrl": "sell-history",
    },
    {
      "headerImage": "assets/images/background/estimated_cost.png",
      "title": "TestComponent",
      "navCtrl": "find-items",
    },
  ]

  constructor(private navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    if(item.title == "TestComponent"){
      this.navCtrl.setRoot('TestcomponentPage')
    }else{
      this.navCtrl.push(item.navCtrl)
    }
    
  }

}
