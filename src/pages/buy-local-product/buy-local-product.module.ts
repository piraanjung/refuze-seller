import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyLocalProductPage } from './buy-local-product';

@NgModule({
  declarations: [
    BuyLocalProductPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyLocalProductPage),
  ],
})
export class BuyLocalProductPageModule {}
