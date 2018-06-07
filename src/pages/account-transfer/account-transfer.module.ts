import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountTransferPage } from './account-transfer';

@NgModule({
  declarations: [
    AccountTransferPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountTransferPage),
  ],
})
export class AccountTransferPageModule {}
