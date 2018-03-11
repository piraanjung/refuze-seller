import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  login={};

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private authen:AuthenProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthenticationPage');
  
  }


  onLogin(){
    // console.log(this.login['username'])
    this.authen.resAuthen(this.login).subscribe(
      data => {
        // data=data
        console.log(data)
      },
      error =>{
        console.log('authen error')
      }
    );
  }

}
