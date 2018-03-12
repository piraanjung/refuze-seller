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
  total: number
  FindItemsPage: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.total = 0
  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile'))
    this.items = JSON.parse(localStorage.getItem('purchaseItems')) || []
    this.total = this.calTotal(this.items)

    if (Object.keys(this.seller).length !== 0 && Object.keys(this.items).length) {
      this.id = this.id
      this.fullname = `${this.seller.name} ${this.seller.last_name}`
      this.mobile = `เบอร์ติดต่อ ${this.seller.mobile}`
      this.address = `บ้านเลขที่ ${this.seller.address} ตำบล ${this.seller.DISTRICT_NAME} อำเภอ ${this.seller.AMPHUR_NAME} จังหวัด ${this.seller.PROVINCE_NAME} ${this.seller.zipcode}`
    }

  }

  removeItem(index) {
    this.items.splice(index, 1)
    this.total = this.calTotal(this.items)
  }

  calTotal(items) {
    return this.items.reduce((pre, cur) => pre += cur.balance, 0);
  }

  createPurchaseProfile() {
    console.log(this.seller)
    let params = {
      buyer_id: 2,
      seller_id: this.seller.id,
      balance: this.total,
      items: this.items
    }

    

  }

}
