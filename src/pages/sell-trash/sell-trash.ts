import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SellTrashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"sell-trash"
})
@Component({
  selector: 'page-sell-trash',
  templateUrl: 'sell-trash.html',
})
export class SellTrashPage {
  show_qr_code: boolean = false;
  qrData = null;
  createCode = null;
  
  seller_code:any =''
  user:any =[]
  data=[
    {

    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.generate_qrcode()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellTrashPage');
  }

  onEvent(event: string, result:any) {
    if (event) {
        // this.events[event](result);
    }
  }

  generate_qrcode(){
    // this.storage.get('currentUser').then(res =>{
    //   this.user =res
    //   console.log(this.user.mobile)
    //   if(this.user.mobile != ""){
        this.createCode = '34593724345123';//this.user.mobile
        this.show_qr_code = true
    //   }
      
    // })
  }

  gotoAfterMatching(){
    this.navCtrl.push("trash-list-and-confirm")
  }

}
