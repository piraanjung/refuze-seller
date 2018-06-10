import { Component } from '@angular/core';
import { IonicPage, App } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthenProvider } from '../../providers/authen/authen';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AlertBoxProvider } from '../../providers/alert-box';
import { Sellers } from '../../models/sellers';

@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
  params: any
  SellerProfile: Sellers;
  data: any = {
    logo: 'assets/images/logo/login.png',
    username: 'Username',
    password: 'Password',
    login: 'ล็อกอิน',
    register: 'ลงทะเบียน'
  }

  constructor(
    private app: App,
    private alertBox: AlertBoxProvider,
    private loading: LoadingPageProvider,
    private authen: AuthenProvider
  ) {
    localStorage.removeItem('sellerProfile')
    this.params = {
      username: '',
      passwords: ''
    }
  }

  onSubmit(myform: NgForm) {
    let loading = this.loading.loading()

    loading.present()
    localStorage.setItem('sellerProfile', JSON.stringify(this.SellerProfile));
    this.authen.resAuthen(this.params).subscribe(
      res => {
        // Seller ONLY
        if (res.logged === true && res.status === 1 && res.user_cate_id === 1) {
          this.SellerProfile = res
          localStorage.setItem('sellerProfile', JSON.stringify(this.SellerProfile))
          this.app.getRootNav().setRoot('main-menu-seller')
          loading.dismiss()
        } else {
          this.alertBox.showAlert('ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่')
          this.params.passwords = ''
          loading.dismiss()
        }
      },
      error => {
        this.alertBox.showAlert('ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่')        
        loading.dismiss();
      }
    );
  }

}
