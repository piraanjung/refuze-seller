import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainMenuSellerPage } from './main-menu-seller';
import { FcmProvider } from '../../providers/fcm/fcm'
import { AngularFirestoreModule } from 'angularfire2/firestore'
@NgModule({
  declarations: [
    MainMenuSellerPage,
  ],
  imports: [
    IonicPageModule.forChild(MainMenuSellerPage),
  ],
  providers:[
    FcmProvider,
    AngularFirestoreModule
  ]
})
export class MainMenuSellerPageModule {}
