import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';
import { MAIN_MENU_SELLER } from '../../providers/main-menu-seller';

@IonicPage({
  name: 'main-menu-seller'
})
@Component({
  selector: 'page-main-menu-seller',
  templateUrl: 'main-menu-seller.html',
})
export class MainMenuSellerPage {

  pages: any = [];

  constructor(
    private navCtrl: NavController,
    private events: Events
  ) {
    this.events.publish('pages', MAIN_MENU_SELLER);
    this.pages = MAIN_MENU_SELLER.filter(menu => menu.icon != 'exit');
  }

  ionViewDidLoad() {
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }

    this.navCtrl.setRoot(item.navCtrl, {}, { animate: true, direction: 'forward' });
  }

}
