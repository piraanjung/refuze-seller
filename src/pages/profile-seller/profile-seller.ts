import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sellers } from '../../models/sellers';

@IonicPage()
@Component({
  selector: 'page-profile-seller',
  templateUrl: 'profile-seller.html',
})
export class ProfileSellerPage {
  seller: Sellers
  id: number
  address: string
  email: string
  mobile: string
  id_card: string
  fullname: string
  image_url: string
  user_cate_name: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile')) 

    if (Object.keys(this.seller).length !== 0) {  
      this.id = this.id
      this.fullname = `${this.seller.name} ${this.seller.last_name}`
      this.mobile = `เบอร์ติดต่อ ${this.seller.mobile}`
      this.address = `บ้านเลขที่ ${this.seller.address} ตำบล ${this.seller.DISTRICT_NAME} อำเภอ ${this.seller.AMPHUR_NAME} จังหวัด ${this.seller.PROVINCE_NAME} ${this.seller.zipcode}`
    }
  }

  goToFindItems () {

  }

  goToHistorySeller() {

  }

}
