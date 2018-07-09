import { Component, ViewChild } from '@angular/core';
import { Platform, App, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'AuthenticationPage';
  
  items = [
    {
      "title_description": "Order No. 1",
      "description": "Will be shipped: 15.5.2016.",
      "buttonText": "PROCEED",
      "headerImage": "assets/images/background/17.jpg",
      "title": "หน้่าหลัก",
      "navCtrl": "main-menu-seller",
      "icon": "appstore"
    },
    {
      "title_description": "Order No. 1",
      "description": "Will be shipped: 15.5.2016.",
      "buttonText": "PROCEED",
      "headerImage": "assets/images/background/17.jpg",
      "title": "ขายขยะ",
      "navCtrl": "sell-trash",
      "icon": "cart"
    },
    {
      "title_description": "",
      "description": "",
      "buttonText": "Click",
      "headerImage": "assets/images/background/17.jpg",
      "title": "ธนาคารขยะ",
      "navCtrl": "account-balance",
      "icon": "logo-bitcoin"
    },
    {
      "title_description": "Order No. 1",
      "description": "Will be shipped: 15.5.2016.",
      "buttonText": "PROCEED",
      "headerImage": "assets/images/background/17.jpg",
      "title": "ซื้อสินค้าออนไลน์",
      "navCtrl": "shopping-cart-main",
      "icon": "cloud"
    },
    {
      "title_description": "Order No. 1",
      "description": "Will be shipped: 15.5.2016.",
      "buttonText": "PROCEED",
      "headerImage": "assets/images/background/17.jpg",
      "title": "ซื้อสินค้าในโรงเรียน",
      "navCtrl": "buy-local-product",
      "icon": "home"
    },
    {
      "title_description": "Order No. 1",
      "description": "Will be shipped: 15.5.2016.",
      "buttonText": "PROCEED",
      "headerImage": "assets/images/background/17.jpg",
      "title": "ราคากลางขยะ",
      "navCtrl": "find-items",
      "icon": "stats"
    },
    {
      "title_description": "Order No. 1",
      "description": "Will be shipped: 15.5.2016.",
      "buttonText": "PROCEED",
      "headerImage": "assets/images/background/17.jpg",
      "title": "ประวัติการขายขยะ",
      "navCtrl": "sell-history",
      "icon": "recording"
    },
    {
      "title_description": "Order No. 1",
      "description": "Will be shipped: 15.5.2016.",
      "buttonText": "PROCEED",
      "headerImage": "assets/images/background/17.jpg",
      "title": "ออกจากระบบ",
      "navCtrl": "AuthenticationPage",
      "icon": "exit"
    }
  ]
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private app: App, private menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.navCtrl);
    this.menu.toggle();
  }

}

