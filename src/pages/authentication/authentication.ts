import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { AuthenProvider } from '../../providers/authen/authen';
import { Buyer } from '../../models/buyer';

@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
  login = {}
  BuyerProfile: Buyer;
  data: any ={
    logo     : 'assets/images/logo/login.png',
    username : 'username',
    password : 'password',
    login    : 'ล็อกอิน',
    register : 'ลงทะเบียน'
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private app: App,
    private authen: AuthenProvider) {
  }

  ionViewDidLoad() {
    localStorage.removeItem('BuyerProfile')
  }


  onLogin() {
    this.authen.resAuthen(this.login).subscribe(
      res => {
        if (res.logged === true) {
          this.BuyerProfile = res
          localStorage.setItem('BuyerProfile', JSON.stringify(this.BuyerProfile))
          // this.navCtrl.push('main-menu-purchase-items')
          this.app.getRootNav().setRoot('main-menu-purchase-items');
        } else {
          this.presentAlert('', 'ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่');
        }
      },
      error => {
        this.presentAlert('', 'คุณยังไม่ได้ใส่ username และ password');
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
