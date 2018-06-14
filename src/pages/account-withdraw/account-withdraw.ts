import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertBoxProvider } from '../../providers/alert-box';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { Sellers } from '../../models/sellers';

@IonicPage({
  name: 'account-withdraw'
})
@Component({
  selector: 'page-account-withdraw',
  templateUrl: 'account-withdraw.html',
})
export class AccountWithdrawPage {

  seller: Sellers
  seller_name: string
  mobile: string
  image: string
  cash_input: number
  balance: number
  label_balance: number
  balance_less_than: number
  params: Object
  BackPage: string
  account_saving_id: number

  constructor(
    private navCtrl: NavController,
    private alertBox: AlertBoxProvider,
    private loading: LoadingPageProvider,
    private accountSaving: AccountSavingProvider
  ) {
    this.BackPage = 'account-perform'
    this.balance = 0
    this.label_balance = 0
    this.params = { cash_input: this.cash_input }
  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {}
    this.seller_name = `${this.seller.name} ${this.seller.last_name}`
    this.mobile = this.seller.mobile
    this.image = this.seller.image_url
    this.cash_input = 0
    this.balance_less_than = 100
    this.account_saving_id = this.seller.account_saving_id || 0
    
    this.getAccountSaving()
  }

  getAccountSaving() {
    let loading = this.loading.loading()
    loading.present()
    this.accountSaving.getAccountSavingBalanceByAccountId(this.account_saving_id)
      .subscribe(res => {
        if (res.status == 200) {
          this.label_balance = res.body.balance
          this.balance = res.body.balance
        } else if (res.status == 204) {
          this.alertBox.showAlert('ไม่พบข้อมูลรายการของบัญชีของคุณ')
        } else {
          this.alertBox.showAlert('ไม่สามารถดำเนินรายการได้ กรุณาลองใหม่ภายหลังต่ะ')
        }

        loading.dismiss()
      }, err => {
        this.alertBox.showAlert('ไม่สามารถดำเนินรายการได้ กรุณาลองใหม่ภายหลังต่ะ')
        console.log(err)
        loading.dismiss()
      })
  }

  private withDrawMoney() {
    
  }

}
