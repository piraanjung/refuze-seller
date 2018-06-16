import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountStatementsPage } from './account-statements';

@NgModule({
  declarations: [
    AccountStatementsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountStatementsPage),
  ],
})
export class AccountStatementsPageModule {}
