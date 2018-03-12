import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseItemsPage } from './purchase-items';
import { PurchaseItemsProvider } from '../../providers/purchase-items/purchase-items';

@NgModule({
  declarations: [
    PurchaseItemsPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(PurchaseItemsPage),
  ],
  providers: [PurchaseItemsProvider]
})
export class PurchaseItemsPageModule { }
