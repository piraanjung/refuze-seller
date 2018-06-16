import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { AccountStatementsPage } from './account-statements';
import { LoadingPageProvider } from '../../providers/loading-page';
@NgModule({
  declarations: [
    AccountStatementsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountStatementsPage),
    HttpClientModule,
  ],
  providers: [AccountSavingProvider, LoadingPageProvider]
})
export class AccountStatementsPageModule { }
