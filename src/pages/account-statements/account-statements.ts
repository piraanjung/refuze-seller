import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { Sellers } from '../../models/sellers';

@IonicPage({
  name: 'account-statements'
})
@Component({
  selector: 'page-account-statements',
  templateUrl: 'account-statements.html',
})
export class AccountStatementsPage {

  seller: Sellers
  private user_id: number

  constructor(
    private navCtrl: NavController,
    private loading: LoadingPageProvider,
    private accountSaving: AccountSavingProvider
  ) { }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {}
    this.user_id = this.seller.id

    this.getAccountStatements()
  }

  private getAccountStatements()
  {
    console.log(this.user_id)
  }
}
