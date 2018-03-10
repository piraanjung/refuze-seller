import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindBuyersPage } from './find-buyers';

@NgModule({
  declarations: [
    FindBuyersPage,
  ],
  imports: [
    IonicPageModule.forChild(FindBuyersPage),
  ],
})
export class FindBuyersPageModule {}
