import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { Item } from '../../models/item';

@IonicPage({
  name: 'purchase-items',
  segment: 'purchase-items'
})
@Component({
  selector: 'page-purchase-items',
  templateUrl: 'purchase-items.html',
})
export class PurchaseItemsPage {
  seller: Sellers
  items: Item[]
  id: number
  address: string
  mobile: string
  fullname: string
  image_url: string
  FindItemsPage: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile'))
    this.items = JSON.parse(localStorage.getItem('purchaseItems'))
    console.log(this.items)
    if (Object.keys(this.seller).length !== 0 && Object.keys(this.items).length) {
      this.id = this.id
      this.fullname = `${this.seller.name} ${this.seller.last_name}`
      this.mobile = `เบอร์ติดต่อ ${this.seller.mobile}`
      this.address = `บ้านเลขที่ ${this.seller.address} ตำบล ${this.seller.DISTRICT_NAME} อำเภอ ${this.seller.AMPHUR_NAME} จังหวัด ${this.seller.PROVINCE_NAME} ${this.seller.zipcode}`
    }

  }

}
