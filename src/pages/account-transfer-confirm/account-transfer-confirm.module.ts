import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountTransferConfirmPage } from './account-transfer-confirm';

@NgModule({
  declarations: [
    AccountTransferConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountTransferConfirmPage),
  ],
})
export class AccountTransferConfirmPageModule {}
