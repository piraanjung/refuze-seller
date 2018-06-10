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
    localStorage.clear()
    this.params = {
      username: '',
      passwords: ''
    }
  }

  onSubmit(myform: NgForm) {
    let loading = this.loading.loading()

    loading.present()
    
    this.authen.resAuthen(this.params).subscribe(
      res => {
        // Seller ONLY
        if (res.status == 204) {
          this.alertBox.showAlert('ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่')
          this.params.passwords = ''
          loading.dismiss()
        }else if (res.status == 200 && res.body.logged === false && res.body.rows === 0) {
          this.alertBox.showAlert('ชื่อเข้าใช้หรือรหัสผ่านไม่ถูกต้อง')
          this.params.passwords = ''
          loading.dismiss()
        }else if (res.status == 200 && res.body.logged === true && res.body.status === 1 && res.body.user_cate_id === 1) {
          this.SellerProfile = res.body
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
        this.alertBox.showAlert('เกิดข้อผิดพลาด กรุณาลองใหม่')
        loading.dismiss();
      }
    );
  }

}
