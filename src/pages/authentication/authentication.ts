import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
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
          console.log(this.BuyerProfile)
          localStorage.setItem('BuyerProfile', JSON.stringify(this.BuyerProfile))
          // this.navCtrl.push('main-menu-purchase-items')
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
