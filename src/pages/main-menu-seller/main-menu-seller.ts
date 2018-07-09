import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MAIN_MENU_SELLER } from '../../providers/main-menu-seller';

@IonicPage({
  name: 'main-menu-seller'
})
@Component({
  selector: 'page-main-menu-seller',
  templateUrl: 'main-menu-seller.html',
})
export class MainMenuSellerPage {

  menu: any = [];

  constructor(private navCtrl: NavController) {
    console.log(MAIN_MENU_SELLER.length)
    this.menu = MAIN_MENU_SELLER;
  }

  ionViewDidLoad() {
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }

    this.navCtrl.setRoot(item.navCtrl, {}, { animate: true, direction: 'forward' })
  }

}
