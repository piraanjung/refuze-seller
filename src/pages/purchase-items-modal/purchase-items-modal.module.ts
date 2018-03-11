import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseItemsModalPage } from './purchase-items-modal';

@NgModule({
  declarations: [
    PurchaseItemsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseItemsModalPage),
  ],
})
export class PurchaseItemsModalPageModule {}
