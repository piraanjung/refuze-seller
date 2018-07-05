import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AlertBoxProvider } from '../../providers/alert-box';

@IonicPage({
  name: 'account-transfer'
})
@Component({
  selector: 'page-account-transfer',
  templateUrl: 'account-transfer.html',
})
export class AccountTransferPage {
  seller: Sellers
  seller_name: string
  mobile: string
  image: string
  cash_input: number
  balance: number
  label_balance: number
  balance_less_than: number
  mobile_receive_transfer: string
  params: Object
  BackPage: string
  NextPage: string
  account_saving_id: number

  constructor(
    private navCtrl: NavController,
    private alertBox: AlertBoxProvider,
    private loading: LoadingPageProvider,
    private accountSaving: AccountSavingProvider
  ) {
    this.BackPage = 'account-perform'
    this.NextPage = 'account-transfer-confirm'
    this.balance = 0
    this.label_balance = 0
    this.params = { cash_input: this.cash_input }
    this.mobile_receive_transfer = ''
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

  getUserProfileReceiveTransfer() {
    let loading = this.loading.loading()
    let mobile_receive_transfer = this.mobile_receive_transfer || ''
    loading.present()
    console.log(mobile_receive_transfer)
    this.accountSaving.getUserProfileReceiveTransfer(mobile_receive_transfer)
      .subscribe(res => {

        let count = Object.keys(res).length
        if (count > 0 && res.account_saving_id != null) {
          localStorage.setItem('AccountReceiveTransfer', JSON.stringify(res))
          localStorage.setItem('CashInput', JSON.stringify(this.cash_input))
          this.navCtrl.push(this.NextPage)
        } else {
          this.alertBox.showAlert('ไม่พบข้อมูลผู้รับโอน กรุณาลองใหม่')
        }

        loading.dismiss()
      }, err => {
        console.log(err)
        loading.dismiss()
      })
  }

}
