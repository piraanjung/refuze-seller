import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainMenuSellerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name : 'main-menu-seller'
})
@Component({
  selector: 'page-main-menu-seller',
  templateUrl: 'main-menu-seller.html',
})
export class MainMenuSellerPage {

  cur_user:any= []
  data:any =[
      {
        "title_description": "Order No. 1",
        "description": "Will be shipped: 15.5.2016.",
        "buttonText": "PROCEED",
        "headerImage": "assets/images/background/17.jpg",
        "title": "ขายขยะ",
        "navCtrl" : "sell-trash",
      },
      {
        "title_description": "Order No. 1",
        "description": "Will be shipped: 15.5.2016.",
        "buttonText": "PROCEED",
        "headerImage": "assets/images/background/17.jpg",
        "title": "ธนาคารขยะ",
        "navCtrl" : "",
      },
      {
        "title_description": "Order No. 1",
        "description": "Will be shipped: 15.5.2016.",
        "buttonText": "PROCEED",
        "headerImage": "assets/images/background/17.jpg",
        "title": "Shopping Cart",
        "navCtrl" : "",
      },
      {
        "title_description": "Order No. 1",
        "description": "Will be shipped: 15.5.2016.",
        "buttonText": "PROCEED",
        "headerImage": "assets/images/background/17.jpg",
        "title": "ราคากลางขยะ",
        "navCtrl" : "",
      },
      {
        "title_description": "Order No. 1",
        "description": "Will be shipped: 15.5.2016.",
        "buttonText": "PROCEED",
        "headerImage": "assets/images/background/17.jpg",
        "title": "ตลาดประชารัฐ",
        "navCtrl" : "",
      },
      {
        "title_description": "Order No. 1",
        "description": "Will be shipped: 15.5.2016.",
        "buttonText": "PROCEED",
        "headerImage": "assets/images/background/17.jpg",
        "title": "ค้นหาผู้รับซื้อขยะ",
        "navCtrl" : "find-buyers",
      },
      {
        "title_description": "Order No. 1",
        "description": "Will be shipped: 15.5.2016.",
        "buttonText": "PROCEED",
        "headerImage": "assets/images/background/17.jpg",
        "title": "วิธีคัดแยกขยะเพิ่มมูลค่า",
        "navCtrl" : "",
      },
      {
        "title_description": "Order No. 1",
        "description": "Will be shipped: 15.5.2016.",
        "buttonText": "PROCEED",
        "headerImage": "assets/images/background/17.jpg",
        "title": "ประวัติการขายขยะ",
        "navCtrl" : "",
      }
    ]
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.cur_user = this.navParams.get('buyerProfile');
    console.log(this.cur_user)

    console.log('ionViewDidLoad MainMenuSellerPage');
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
        e.stopPropagation();
    }
    this.navCtrl.push(item.navCtrl)
}

}
