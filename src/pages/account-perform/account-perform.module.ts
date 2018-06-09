import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AccountPerformPage } from './account-perform';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';

@NgModule({
  declarations: [
    AccountPerformPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountPerformPage),
    HttpClientModule,
  ],
  providers: [AccountSavingProvider]
})
export class AccountPerformPageModule { }
