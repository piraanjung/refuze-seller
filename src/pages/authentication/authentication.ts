import { Component } from '@angular/core';
import { IonicPage, LoadingController, AlertController, App } from 'ionic-angular';
import { AuthenProvider } from '../../providers/authen/authen';
import { Buyer } from '../../models/buyer';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
  params: any
  SellerProfile: Buyer;
  data: any = {
    logo: 'assets/images/logo/login.png',
    username: 'Username',
    password: 'Password',
    login: 'ล็อกอิน',
    register: 'ลงทะเบียน'
  }

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private app: App,
    private authen: AuthenProvider) {
    localStorage.removeItem('sellerProfile')
    this.params = {
      username: '',
      passwords: ''
    }
  }

  onSubmit(myform: NgForm) {
    let loader = this.loadingCtrl.create({
      content: 'กำลังดำเนินการ...',
      spinner: 'crescent',
      dismissOnPageChange: true,
    });

    loader.present();
    localStorage.setItem('sellerProfile', JSON.stringify(this.SellerProfile))
    this.authen.resAuthen(this.params).subscribe(
      res => {
        if (res.logged === true) {
          this.SellerProfile = res
          localStorage.setItem('sellerProfile', JSON.stringify(this.SellerProfile))
          this.app.getRootNav().setRoot('main-menu-seller');
        } else {
          this.presentAlert('', 'ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่');
          this.params.passwords = ''
          loader.dismiss();
        }
      },
      error => {
        this.presentAlert('', 'ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่');
        loader.dismiss();
      }
    );
  }

  presentAlert(title, subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['ปิด']
    });
    alert.present();
  }

}
