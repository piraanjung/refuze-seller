import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { AccountStatementsPage } from './account-statements';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AlertBoxProvider } from '../../providers/alert-box';
@NgModule({
  declarations: [
    AccountStatementsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountStatementsPage),
    HttpClientModule,
  ],
  providers: [AccountSavingProvider, LoadingPageProvider, AlertBoxProvider]
})
export class AccountStatementsPageModule { }
