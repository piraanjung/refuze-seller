import { Component } from '@angular/core';
import { IonicPage, App, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthenProvider } from '../../providers/authen/authen';
import { LoadingPageProvider } from '../../providers/loading-page';
import { AlertBoxProvider } from '../../providers/alert-box';
import { Sellers } from '../../models/sellers';
import { SellTrashInSchoolPage} from '../../pages/sell-trash-in-school/sell-trash-in-school';
import {Sim} from '@ionic-native/sim'
@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
  params: any
  title:string = "KANNA"
  SellerProfile: Sellers;
  data: any = {
    logo: 'assets/images/logo/login.png',
    username: 'Username',
    password: 'Password',
    login: 'ล็อกอิน',
    register: 'ลงทะเบียน',
    rqcode : 'assets/imgs/qrcodBtn.png'
  }
  passwords:string=""

  constructor(
    private app: App,
    private alertBox: AlertBoxProvider,
    private loading: LoadingPageProvider,
    private authen: AuthenProvider,
    private alertCtrl: AlertController,
    private sim: Sim
  ) {
    localStorage.clear()
    this.params = {
      username: '',
      passwords: '',
      mobile:''
    }
  }

  onSubmit(myform: NgForm) {
    let loading = this.loading.loading()

    loading.present()

    this.authen.Authen(this.params)
      .subscribe(
        res => {
          // Seller ONLY
          if (res.status == 204) {
            this.alertBox.showAlert('ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่')
            this.params.passwords = ''
            loading.dismiss()
          } else if (res.status == 200 && res.body.logged === false && res.body.rows === 0) {
            this.alertBox.showAlert('ชื่อเข้าใช้หรือรหัสผ่านไม่ถูกต้อง')
            this.params.passwords = ''
            loading.dismiss()
          } else if (res.status == 200 && res.body.logged === true && res.body.status === 1 && res.body.user_cate_id === 1) {
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

  showPrompt() {
    this.sim.getSimInfo().then(
      (info) => console.log('Sim info: ', info),
      (err) => console.log('Unable to get sim info: ', err)
    );
  
    let loading = this.loading.loading()

    const prompt = this.alertCtrl.create({
      title: 'ยืนยันตัวตน',
      message: "ใส่รหัสผ่านของท่านเพื่อเข้าสู๋ระบบ",
      inputs: [
        {
          name: 'password',
          placeholder: '1234567890'
        },
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'เข้าสู่ระบบ',
          handler: data => {
            this.params.passwords = "'"+data+"'",
            this.params.mobile = '12345676'
            this.authen.AuthenByPasswordAndPhonNumber(this.params)
            .subscribe(res => {
              console.log(res);
              if (res.status == 204) {
                this.alertBox.showAlert('ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่')
                this.params.passwords = ''
                loading.dismiss()
              } else if (res.status == 200 && res.body.logged === false && res.body.rows === 0) {
                this.alertBox.showAlert('ชื่อเข้าใช้หรือรหัสผ่านไม่ถูกต้อง')
                this.params.passwords = ''
                loading.dismiss()
              } else if (res.status == 200 && res.body.logged === true && res.body.status === 1 && res.body.user_cate_id === 1) {
                this.SellerProfile = res.body
                localStorage.setItem('sellerProfile', JSON.stringify(this.SellerProfile))
                this.app.getRootNav().setRoot('sell-trash-in-school')
                loading.dismiss()
              } else {
                this.alertBox.showAlert('ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่')
                this.params.passwords = ''
                loading.dismiss()
              }
             }, error => {
              console.log(error);
            });
            this.params.passwords = ''
          }
        }
      ]
    });
    prompt.present();
  }

}
