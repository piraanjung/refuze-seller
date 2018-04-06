import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, LoadingController, AlertController, App } from 'ionic-angular';
import { AuthenProvider } from '../../providers/authen/authen';
import { Buyer } from '../../models/buyer';
import { NgForm } from '@angular/forms';
=======
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AuthenticationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
>>>>>>> 1e2f290fa89dc76314c37742aaa0a2b5c3c0cf01

@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
<<<<<<< HEAD
  params: any
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
    localStorage.removeItem('buyerProfile')
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

    this.authen.resAuthen(this.params).subscribe(
      res => {
        if (res.logged === true) {
          this.BuyerProfile = res
          localStorage.setItem('buyerProfile', JSON.stringify(this.BuyerProfile))
          this.app.getRootNav().setRoot('main-seller-menu');
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
=======

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthenticationPage');
>>>>>>> 1e2f290fa89dc76314c37742aaa0a2b5c3c0cf01
  }

}
