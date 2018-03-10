import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { FindSellerPage } from './find-seller';

@NgModule({
  declarations: [
    FindSellerPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(FindSellerPage),
  ],
})
export class FindSellerPageModule {}
