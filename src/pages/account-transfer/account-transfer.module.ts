import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AccountTransferPage } from './account-transfer';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AlertBoxProvider } from '../../providers/alert-box';

@NgModule({
  declarations: [
    AccountTransferPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountTransferPage),
    HttpClientModule,
  ],
  providers: [AccountSavingProvider, LoadingPageProvider, AlertBoxProvider]
})
export class AccountTransferPageModule { }
