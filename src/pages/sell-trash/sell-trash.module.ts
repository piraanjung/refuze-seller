import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellTrashPage } from './sell-trash';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { appconfig } from '../../providers/app.config' ;

import { ChatService } from '../../app/app.service'

@NgModule({
  declarations: [
    SellTrashPage,
  ],
  imports: [
    IonicPageModule.forChild(SellTrashPage),
    NgxQRCodeModule,
    AngularFireModule.initializeApp(appconfig.config),
    AngularFirestoreModule
  ],
  providers:[
    BarcodeScanner,
    ChatService
  ]
})
export class SellTrashPageModule {}
