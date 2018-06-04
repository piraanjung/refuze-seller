import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the BuyLocalProductPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name : 'buy-local-product-payment'
})
@Component({
  selector: 'page-buy-local-product-payment',
  templateUrl: 'buy-local-product-payment.html',
})
export class BuyLocalProductPaymentPage {
  @Input() events: any;

  user : {}={
    name:'การค้า ดีงาน',
    phone: '0984342341',
    addr : 'ต.ในเมือง อ.เมือง จ.อุบลราชะานี'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, 
      public alertCtrl: AlertController) {
    // this.user = this.navParams.get('localUser');

        console.log(this.user)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyLocalProductPaymentPage');
  }

  confirmPayment(){
    let alert = this.alertCtrl.create({
      title: 'รหัส PIN',
      inputs: [
        {
          name: 'pincode',
        },
      ],
      buttons: [
        {
          text: 'ยืนยัน',
          handler: data => {
            // if (User.isValid(data.username, data.password)) {
            if(data.pincode=="1234"){
              console.log(data.pincode)
            } else {
              // invalid login
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

  onEvent(event:string, item:any) {//ITEM [EVENT OR SELECTED ITEM]
    //1. ทำการ update ข้อมูลของผู้ขาย เพิ่มจำนวนเงินที่โอนจากผู้ซื้อ
    //2. ทำการ update  ข้อมูลผู้ซื้อสินค้า ลดจำนวนเงิน
    //3. ทำการส่ง message ไปยังผู้ขายสินค้าว่าได้มีการโอนเงินเข้าบัญชีจากผู้ซื้อสินค้ามายังผู้ขายสินค้าแล้ว
    //4. ไปหน้าแสดงผลการซื้อสินค้าของผู้ซื้อสินค้า
    this.navCtrl.push('buy-local-product-result',{
      'localProductSeller' : this.user,
      'transferAmount' : item
    })
    console.log(item);
  }

}
