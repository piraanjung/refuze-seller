import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AccountTransferPage } from './account-transfer';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';

@NgModule({
  declarations: [
    AccountTransferPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountTransferPage),
    HttpClientModule,
  ],
  providers: [AccountSavingProvider]
})
export class AccountTransferPageModule { }
