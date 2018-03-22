import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MAIN_MENU_PURCHASE_ITEMS } from '../../providers/_main-menu-purchase-items';

@IonicPage({
  name: 'main-menu-purchase-items',
  segment: 'main-menu-purchase-items'
})
@Component({
  selector: 'page-main-menu-purchase-items',
  templateUrl: 'main-menu-purchase-items.html',
})
export class MainMenuPurchaseItemsPage {
  data: any

  constructor(
    private navCtrl: NavController) {
    localStorage.removeItem('sellerProfile')
    localStorage.removeItem('purchaseItems')
    this.data = MAIN_MENU_PURCHASE_ITEMS
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }

    if (item != "#") {
      this.navCtrl.push(item);
    }
  }

}
