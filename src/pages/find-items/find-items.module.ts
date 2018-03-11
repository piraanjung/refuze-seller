import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindItemsPage } from './find-items';

@NgModule({
  declarations: [
    FindItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(FindItemsPage),
  ],
})
export class FindItemsPageModule {}
