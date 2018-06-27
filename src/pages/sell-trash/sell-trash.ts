import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



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
    let sellerProfile = JSON.parse(localStorage.getItem('sellerProfile'));
    console.log(sellerProfile);
    this.createCode = sellerProfile.id_card;
  }

  gotoAfterMatching(){
    this.navCtrl.push("trash-list-and-confirm")
  }

}
