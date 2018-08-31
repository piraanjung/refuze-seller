import {
  Component, OnInit
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from 'ionic-angular';
import {
  AngularFirestore
} from "angularfire2/firestore";
import {
  User
} from "../../app/app.models";
import {
  Observable
} from "rxjs";
import {
  ChatService
} from "../../app/app.service";
import {
  appconfig
} from "../../providers/app.config";

import { MainMenuSellerPage} from '../../pages/main-menu-seller/main-menu-seller'

@IonicPage({
  name: "sell-trash"
})
@Component({
  selector: 'page-sell-trash',
  templateUrl: 'sell-trash.html',
})
export class SellTrashPage implements OnInit {
  show_qr_code: boolean = false;
  qrData = null;
  createCode = null;
  _alert:any


  seller_code: any = ''
  user: any = []
  data = [{
  }];
  // _user:User 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFirestore,
    public chatservice: ChatService,
    public alertCtrl: AlertController
  ) {
    this.generate_qrcode();
  }

  ngOnInit() {
    let doc_id = "1535688483059-3459324345189";
    let washingtonRef = this.db.collection(appconfig.users_endpoint).doc(doc_id);
    let alert = this.alertCtrl.create({
      title: 'ทำการเชื่อมต่อแล้ว',
      message: 'รอรับข้อมูลการขายจากผู้ซื้อ',
      buttons: [
        {
          text: 'ตกลง',
          handler: () => {
            this.navCtrl.setRoot(MainMenuSellerPage);
          }
        }
      ]
    });
    // ทำการ update สถานะ การซื้อขายเป็น 2 = รอการยืนยันข้อมูล
    // การซื้อขยะจากผู้ซื้อ
    washingtonRef.ref.get().then(function (doc) {
      if (doc.exists) {
        return washingtonRef.update({
            status: 2
          })
          .then(function () {
            // ถ้าupdate สำเร็จให้ทำการแสดง popup ว
            alert.present();
          })
          .catch(function (error) {
            // ถ้าไม่ให้แสดง error
            console.error("Error updating document: ", error);
          });


      } else {
        // ไม่มี doc id 
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

  }

  onEvent(event: string, result: any) {
    if (event) {
      // this.events[event](result);
    }
  }

  generate_qrcode() {
    let sellerProfile = JSON.parse(localStorage.getItem('sellerProfile'));
    this.createCode = sellerProfile.id_card;
  }

  gotoAfterMatching() {
    this.navCtrl.push("trash-list-and-confirm")
  }

}
