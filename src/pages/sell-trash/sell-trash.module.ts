import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellTrashPage } from './sell-trash';

@NgModule({
  declarations: [
    SellTrashPage,
  ],
  imports: [
    IonicPageModule.forChild(SellTrashPage),
  ],
})
export class SellTrashPageModule {}
