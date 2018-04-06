import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainMenuSellerPage } from './main-menu-seller';

@NgModule({
  declarations: [
    MainMenuSellerPage,
  ],
  imports: [
    IonicPageModule.forChild(MainMenuSellerPage),
  ],
})
export class MainMenuSellerPageModule {}
