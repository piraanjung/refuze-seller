import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AccountTransferConfirmPage } from './account-transfer-confirm';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AlertBoxProvider } from '../../providers/alert-box';

@NgModule({
  declarations: [
    AccountTransferConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountTransferConfirmPage),
    HttpClientModule,
  ],
  providers: [AccountSavingProvider, LoadingPageProvider, AlertBoxProvider]
})
export class AccountTransferConfirmPageModule { }
