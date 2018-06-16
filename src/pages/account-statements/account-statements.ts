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

    this.getAccountStatements()
  }

  private getAccountStatements()
  {
    console.log(this.user_id)
    let loading = this.loading.loading()
    loading.present()
    
    this.accountSaving.getAccountStatements()
    .subscribe(res => {
      console.log(res)
      loading.dismiss()
    }, err => {
      console.log(err)
      loading.dismiss()
    })
  }
}
