import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSellerPage } from './profile-seller';

@NgModule({
  declarations: [
    ProfileSellerPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSellerPage),
  ],
})
export class ProfileSellerPageModule {}
