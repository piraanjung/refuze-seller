import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AccountBalancePage } from './account-balance';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';

@NgModule({
  declarations: [
    AccountBalancePage,
  ],
  imports: [
    IonicPageModule.forChild(AccountBalancePage),
    HttpClientModule,
  ],
  providers: [AccountSavingProvider]
})
export class AccountBalancePageModule { }
