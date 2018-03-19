import { Component, Input, ViewChild } from '@angular/core';
import { Content, FabButton } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PurchaseItemsMenu } from "../../models/purchase-items-menu";
import {MainMenuPurchaseItemProvider } from "../../providers/main-menu-purchase-item/main-menu-purchase-item"
@IonicPage({
  name: 'main-menu-purchase-items',
  segment: 'main-menu-purchase-items'
})
@Component({
  selector: 'page-main-menu-purchase-items',
  templateUrl: 'main-menu-purchase-items.html',
})
export class MainMenuPurchaseItemsPage {
    @Input() data;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;
    @ViewChild(FabButton)
    fabButton: FabButton;

    animateItems = [];
    animateClass: any;
    

  cards: PurchaseItemsMenu[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private mainMenuPurchaseItemProvider : MainMenuPurchaseItemProvider ) {
    this.animateClass = { 'fade-in-left-item': true };
    this.data = mainMenuPurchaseItemProvider.data();
  }

  ionViewDidLoad() {
    localStorage.removeItem('purchaseItems')
    localStorage.removeItem('sellerProfile')
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
        e.stopPropagation();
    }
    if (item !="#") {
        this.navCtrl.push(item);
    }
}

}
