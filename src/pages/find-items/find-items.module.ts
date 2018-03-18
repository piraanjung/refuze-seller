import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { FindItemsPage } from './find-items';
import { ItemsProvider } from '../../providers/items/items';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';

@NgModule({
  declarations: [
    FindItemsPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(FindItemsPage),
  ],
  providers: [ItemsProvider, FindSellersProvider]
})
export class FindItemsPageModule { }
