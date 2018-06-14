import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AccountWithdrawPage } from './account-withdraw';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AlertBoxProvider } from '../../providers/alert-box';

@NgModule({
  declarations: [
    AccountWithdrawPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountWithdrawPage),
    HttpClientModule,
  ],
  providers: [AccountSavingProvider, LoadingPageProvider, AlertBoxProvider]
})
export class AccountWithdrawPageModule { }
