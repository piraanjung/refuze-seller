import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartListsPage } from './cart-lists';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SellBottleInSchoolProvider} from '../../providers/sell-bottle-in-school/sell-bottle-in-school';

@NgModule({
  declarations: [
    CartListsPage,
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    IonicPageModule.forChild(CartListsPage),
  ],
  providers:[SellBottleInSchoolProvider]
})
export class CartListsPageModule {}
