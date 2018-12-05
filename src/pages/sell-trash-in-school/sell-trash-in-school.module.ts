import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicPageModule } from 'ionic-angular';
import { SellTrashInSchoolPage } from './sell-trash-in-school';
import { SellBottleInSchoolProvider } from '../../providers/sell-bottle-in-school/sell-bottle-in-school';

@NgModule({
  declarations: [
    SellTrashInSchoolPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(SellTrashInSchoolPage)
  ],
  providers: [SellBottleInSchoolProvider]

})
export class SellTrashInSchoolPageModule {}
