import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthenProvider } from '../../providers/authen/authen';
/**
 * Generated class for the AuthenticationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
  login={}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    private authen:AuthenProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthenticationPage');
  
  }


  onLogin(){
    this.authen.resAuthen(this.login).subscribe(
      data => {
        if(data['status'] ==1 ){
          this.navCtrl.push('main-menu-purchase-items')
        }else{
          this.presentAlert('','ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่');
        }
      },
      error =>{
        this.presentAlert('','คุณยังไม่ได้ใส่ username และ password');
      }
    );
  }


  presentAlert(title, subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
