import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SearchPurchaseHistoryPage } from './search-purchase-history';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';


@NgModule({
  declarations: [
    SearchPurchaseHistoryPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(SearchPurchaseHistoryPage),
  ],
  providers: [FindSellersProvider]
})
export class SearchPurchaseHistoryPageModule {}
