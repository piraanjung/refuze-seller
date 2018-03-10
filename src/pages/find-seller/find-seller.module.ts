import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { FindSellerPage } from './find-seller';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';

@NgModule({
  declarations: [
    FindSellerPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(FindSellerPage),
  ],
  providers: [FindSellersProvider]
})
export class FindSellerPageModule { }
