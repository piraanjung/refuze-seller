import { Component, ViewChild } from '@angular/core';
import { Platform, App, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'AuthenticationPage';
  @ViewChild(Nav) nav:Nav;
  showSplash  = true
  seller_menu:any[];
  data :any={
    "backgroundImage": 'assets/images/background/31.jpg',
    "logo": 'assets/images/logo/login-3.png',
    "title": "REFUZE"
}
items=  [
  {
    "title_description": "Order No. 1",
    "description": "Will be shipped: 15.5.2016.",
    "buttonText": "PROCEED",
    "headerImage": "assets/images/background/17.jpg",
    "title": "ขายขยะ",
    "navCtrl": "sell-trash",
    "icon" : "cart"
  },
  {
    "title_description": "",
    "description": "",
    "buttonText": "Click",
    "headerImage": "assets/images/background/17.jpg",
    "title": "ธนาคารขยะ",
    "navCtrl": "account-balance",
    "icon" : "cart"
  },
  {
    "title_description": "Order No. 1",
    "description": "Will be shipped: 15.5.2016.",
    "buttonText": "PROCEED",
    "headerImage": "assets/images/background/17.jpg",
    "title": "Shoping Cart",
    "navCtrl": "shopping-cart-main",
    "icon" : "cart"
  },
  {
    "title_description": "Order No. 1",
    "description": "Will be shipped: 15.5.2016.",
    "buttonText": "PROCEED",
    "headerImage": "assets/images/background/17.jpg",
    "title": "ซื้อสินค้าในโรงเรียน",
    "navCtrl": "buy-local-product",
    "icon" : "cart"
  },
  {
    "title_description": "Order No. 1",
    "description": "Will be shipped: 15.5.2016.",
    "buttonText": "PROCEED",
    "headerImage": "assets/images/background/17.jpg",
    "title": "ราคากลางขยะ",
    "navCtrl": "find-items",
    "icon" : "cart"
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
    "icon" : "cart"
  }
]
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
              private app:App, private menu:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // timer(7000).subscribe(() =>this.showSplash = false)
    });
  }

  openPage(page){
    this.nav.setRoot(page.navCtrl)
    this.menu.toggle()
  }
  
}

