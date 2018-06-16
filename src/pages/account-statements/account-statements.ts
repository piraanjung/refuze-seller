import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';

@IonicPage({
  name: 'account-statements'
})
@Component({
  selector: 'page-account-statements',
  templateUrl: 'account-statements.html',
})
export class AccountStatementsPage {

  constructor(
    private navCtrl: NavController,
    private loading: LoadingPageProvider,
    private accountSaving: AccountSavingProvider
  ) { }

  ionViewDidLoad() {

  }

}
