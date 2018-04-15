import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindBuyersPage } from './find-buyers';
import { Geolocation } from '@ionic-native/geolocation';
@NgModule({
  declarations: [
    FindBuyersPage,
  ],
  imports: [
    IonicPageModule.forChild(FindBuyersPage),
  ],
  providers: [
    Geolocation
  ]
})
export class FindBuyersPageModule {}
