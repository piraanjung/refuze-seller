import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AccountBalancePage } from './account-balance';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AlertBoxProvider } from '../../providers/alert-box';

@NgModule({
  declarations: [
    AccountBalancePage
  ],
  imports: [
    IonicPageModule.forChild(AccountBalancePage),
    HttpClientModule,
  ],
  providers: [AccountSavingProvider, LoadingPageProvider, AlertBoxProvider]
})
export class AccountBalancePageModule { }
