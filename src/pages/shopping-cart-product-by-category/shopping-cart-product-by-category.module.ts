import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingCartProductByCategoryPage } from './shopping-cart-product-by-category';

@NgModule({
  declarations: [
    ShoppingCartProductByCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingCartProductByCategoryPage),
  ],
})
export class ShoppingCartProductByCategoryPageModule {}
