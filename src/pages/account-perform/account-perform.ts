import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AlertBoxProvider } from '../../providers/alert-box';

@IonicPage({
  name: 'account-perform'
})
@Component({
  selector: 'page-account-perform',
  templateUrl: 'account-perform.html',
})
export class AccountPerformPage {
  AccountTransfer: string
  seller: Sellers
  seller_name: string
  mobile: string
  image: string
  balance: number
  account_saving_id: number

  constructor(
    private loading: LoadingPageProvider,
    private alertBox: AlertBoxProvider,
    private accountSaving: AccountSavingProvider
  ) {
    this.AccountTransfer = 'account-transfer'
    this.balance = 0
  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {}
    this.seller_name = `${this.seller.name} ${this.seller.last_name}`
    this.mobile = this.seller.mobile
    this.image = this.seller.image_url
    this.account_saving_id = this.seller.account_saving_id || 0
    
    this.getAccountSaving()
  }

  getAccountSaving() {
    let loading = this.loading.loading()
    loading.present()
    this.accountSaving.getAccountSavingBalanceByAccountId(this.account_saving_id)
      .subscribe(res => {
        if (res.status == 200) {
          this.balance = res.body.balance
        }else if (res.status == 204) {
          this.alertBox.showAlert('ไม่พบข้อมูลรายการของบัญชีของคุณ')
        }else {
          this.alertBox.showAlert('ไม่สามารถดำเนินรายการได้ กรุณาลองใหม่ภายหลังต่ะ')
        }

        loading.dismiss()
      }, err => {
        this.alertBox.showAlert('ไม่สามารถดำเนินรายการได้ กรุณาลองใหม่ภายหลังต่ะ')
        console.log(err)
        loading.dismiss()
      })
  }

}
