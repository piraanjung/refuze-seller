import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellTrashPage } from './sell-trash';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    SellTrashPage,
  ],
  imports: [
    IonicPageModule.forChild(SellTrashPage),
    NgxQRCodeModule
  ],
  providers:[
    BarcodeScanner
  ]
})
export class SellTrashPageModule {}
