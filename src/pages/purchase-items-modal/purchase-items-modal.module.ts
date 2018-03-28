import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseItemsModalPage } from './purchase-items-modal';
import { ItemsProvider } from '../../providers/items/items';

@NgModule({
  declarations: [
    PurchaseItemsModalPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(PurchaseItemsModalPage),
  ],
  providers: [ItemsProvider]
})
export class PurchaseItemsModalPageModule { }
