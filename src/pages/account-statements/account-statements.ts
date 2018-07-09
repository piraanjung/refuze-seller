import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { Sellers } from '../../models/sellers';
import { AccountStatements } from '../../models/account-statements';
import { AlertBoxProvider } from '../../providers/alert-box';

@IonicPage({
  name: 'account-statements'
})
@Component({
  selector: 'page-account-statements',
  templateUrl: 'account-statements.html',
})
export class AccountStatementsPage {

  seller: Sellers;
  statements: AccountStatements[];

  constructor(
    private navCtrl: NavController,
    private loading: LoadingPageProvider,
    private alertBox: AlertBoxProvider,
    private accountSaving: AccountSavingProvider
  ) { }

  ionViewDidLoad() {

    this.getAccountStatements();
  }

  private getAccountStatements()
  {
    let loading = this.loading.loading();
    loading.present();

    this.accountSaving.getAccountStatements()
    .subscribe(res => {
      this.statements = res.body;
      loading.dismiss();
    }, err => {
      this.alertBox.showAlert('ไม่สามารถดำเนินรายการได้ กรุณาลองใหม่ภายหลัง')
      console.log(err);
      loading.dismiss();
    })
  }

  openPage(page) {
    this.navCtrl.setRoot(page, {}, { animate: true, direction: 'forward' });
  }
}
