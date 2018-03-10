import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseItemsPage } from './purchase-items';

@NgModule({
  declarations: [
    PurchaseItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseItemsPage),
  ],
})
export class PurchaseItemsPageModule {}
