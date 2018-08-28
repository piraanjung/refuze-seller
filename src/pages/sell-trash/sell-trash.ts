import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from "angularfire2/firestore";
import { User } from "../../app/app.models";
import { Observable } from "rxjs";
import { ChatService } from "../../app/app.service";
import { appconfig } from "../../providers/app.config";

import { MainMenuSellerPage } from '../../pages/main-menu-seller/main-menu-seller'

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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db: AngularFirestore,
    private chatservice: ChatService,
  ) {
    this.generate_qrcode()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellTrashPage');
    let email ="t_1535294281757@gmail.com";
    this.db.collection<User>(appconfig.users_endpoint, ref =>{
      return ref.where("email", "==", email);
    }).valueChanges()
    .subscribe(user=>{
      console.log(user)
    });
  }

  onEvent(event: string, result:any) {
    if (event) {
        // this.events[event](result);
    }
  }

  generate_qrcode(){
    let sellerProfile = JSON.parse(localStorage.getItem('sellerProfile'));
    this.createCode = sellerProfile.id_card;
  }

  gotoAfterMatching(){
    this.navCtrl.push("trash-list-and-confirm")
  }

}
