import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrashListAndConfirmPage } from './trash-list-and-confirm';

@NgModule({
  declarations: [
    TrashListAndConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(TrashListAndConfirmPage),
  ],
})
export class TrashListAndConfirmPageModule {}
