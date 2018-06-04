import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SellHistoryPage } from './sell-history';
import { PurchaseItemsProvider } from "../../providers/purchase-items/purchase-items"

@NgModule({
  declarations: [
    SellHistoryPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(SellHistoryPage),
  ],
  providers:[
    PurchaseItemsProvider
  ]
})
export class SellHistoryPageModule {}
