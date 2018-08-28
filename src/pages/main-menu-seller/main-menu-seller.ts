import { Component } from '@angular/core';
import { IonicPage, NavController, Events, MenuController } from 'ionic-angular';
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
  headerSideBar: string;

  constructor(
    private navCtrl: NavController,
    private events: Events,
    private menuCtrl: MenuController
  ) {
    this.headerSideBar = 'ขายขยะ';
    this.events.publish('header-side-bar', this.headerSideBar);
    this.events.publish('pages', MAIN_MENU_SELLER);
    this.menuCtrl.enable(true, 'menu-side-bar');
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
