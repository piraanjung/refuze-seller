import { Component } from '@angular/core';
import { IonicPage, NavController, Events, MenuController } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { AccountSavingProvider } from '../../providers/account-saving/account-saving';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AlertBoxProvider } from '../../providers/alert-box';
import { MAIN_MENU_ACCOUNT } from '../../providers/main-menu-account';

@IonicPage({
  name: 'account-balance'
})
@Component({
  selector: 'page-account-balance',
  templateUrl: 'account-balance.html',
})
export class AccountBalancePage {

  AccountPerform: string
  seller: Sellers
  seller_name: string
  mobile: string
  image: string
  balance: number
  account_saving_id: number
  headerSideBar: string

  constructor(
    private accountSaving: AccountSavingProvider,
    private alertBox: AlertBoxProvider,
    private loading: LoadingPageProvider,
    private events: Events,
    private menuCtrl: MenuController
  ) {
    this.headerSideBar = 'ธนาคารขยะ';
    this.events.publish('header-side-bar', this.headerSideBar);
    this.events.publish('pages', MAIN_MENU_ACCOUNT);
    this.menuCtrl.enable(true, 'menu-side-bar');
    this.AccountPerform = 'account-perform'
    this.balance = 0

    
  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) || {}
    this.seller_name = `${this.seller.name} ${this.seller.last_name}`
    this.mobile = this.seller.mobile
    this.image = this.seller.image_url
    this.account_saving_id = this.seller.account_saving_id || 0

    localStorage.removeItem('AccountReceiveTransfer')
    localStorage.removeItem('CashInput')

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
