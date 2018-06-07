import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountPerformPage } from './account-perform';

@NgModule({
  declarations: [
    AccountPerformPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountPerformPage),
  ],
})
export class AccountPerformPageModule {}
