import { Component } from '@angular/core';
import { IonicPage, LoadingController, AlertController, App } from 'ionic-angular';
import { AuthenProvider } from '../../providers/authen/authen';
import { Buyer } from '../../models/buyer';

@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
  login = {
    username: '',
    passwords: ''
  }

  BuyerProfile: Buyer;
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
    localStorage.removeItem('BuyerProfile')
  }

  onLogin() {
    if (this.login.username === '' || this.login.passwords === '') {
      this.presentAlert('', 'กรุณาใส่ Username และ Password');
      return;
    }

    let loader = this.loadingCtrl.create({
      content: 'กำลังดำเนินการ...',
      spinner: 'crescent',
      dismissOnPageChange: true,
    });

    loader.present();

    this.authen.resAuthen(this.login).subscribe(
      res => {
        if (res.logged === true) {
          this.BuyerProfile = res
          localStorage.setItem('BuyerProfile', JSON.stringify(this.BuyerProfile))
          this.app.getRootNav().setRoot('main-menu-purchase-items');
        } else {
          this.presentAlert('', 'ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่');
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
