import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainMenuPurchaseItemsPage } from './main-menu-purchase-items';
import { MainMenuPurchaseItemProvider } from "../../providers/main-menu-purchase-item/main-menu-purchase-item";
@NgModule({
  declarations: [
    MainMenuPurchaseItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(MainMenuPurchaseItemsPage),

  ],
  providers:[
    MainMenuPurchaseItemProvider
  ]
})
export class MainMenuPurchaseItemsPageModule {}
