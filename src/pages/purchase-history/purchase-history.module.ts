import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseHistoryPage } from './purchase-history';
import { PurchaseItemsProvider } from "../../providers/purchase-items/purchase-items"

@NgModule({
  declarations: [
    PurchaseHistoryPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(PurchaseHistoryPage),
  ],
  providers:[
    PurchaseItemsProvider
  ]
})
export class PurchaseHistoryPageModule {}
