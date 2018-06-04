import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the BuyLocalProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name : "buy-local-product"
})
@Component({
  selector: 'page-buy-local-product',
  templateUrl: 'buy-local-product.html',
})
export class BuyLocalProductPage {

  data = {}
  option: BarcodeScannerOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyLocalProductPage');
  }

  Scanqrcode() {
    // this.option = {
    //   preferFrontCamera: false,
    //   prompt: "สแกน QR CODE"
    // }
   // this.barcodeScanner.scan(this.option).then((barcodeData) => {
      // this.data = barcodeData.text
      // this.search_user(this.data)
      if(1==1){
        let localUser ={
            name:'การค้า ดีงาน',
            phone: '0984342341',
            addr : 'ต.ในเมือง อ.เมือง จ.อุบลราชะานี'
          }

        this.navCtrl.push('buy-local-product-payment',{
          'localUser' : localUser
        })
      }
    // }, (err) => {
    //   // An error occurred
    //   console.log(err)
    // });

  }


}
