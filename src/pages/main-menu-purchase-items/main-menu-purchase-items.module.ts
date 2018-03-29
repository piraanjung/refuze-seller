import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainMenuPurchaseItemsPage } from './main-menu-purchase-items';
@NgModule({
  declarations: [
    MainMenuPurchaseItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(MainMenuPurchaseItemsPage),
  ]
})
export class MainMenuPurchaseItemsPageModule {}
