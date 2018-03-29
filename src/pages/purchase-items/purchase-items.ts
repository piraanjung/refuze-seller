import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { Buyer } from '../../models/buyer';
import { Item } from '../../models/item';
import { PurchaseItemsProvider } from '../../providers/purchase-items/purchase-items';

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
  buyer: Buyer
  items: Item[]
  id: number
  address: string
  mobile: string
  fullname: string
  image_url: string
  total: number
  isHide: boolean
  isDisabled: boolean
  FindSellerPage: string
  MainMenuPage: string
  animateItems = [];
  animateClass: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private purchaseItemsProvider: PurchaseItemsProvider
  ) {
    this.total = 0
    this.isHide = false
    this.isDisabled = true
    this.FindSellerPage = 'find-seller'
    this.MainMenuPage = 'main-menu-purchase-items'
    this.animateClass = { 'zoom-in': true };
  }

  ionViewDidLoad() {
    this.seller = JSON.parse(localStorage.getItem('sellerProfile'))
    this.buyer = JSON.parse(localStorage.getItem('BuyerProfile'))
    this.items = JSON.parse(localStorage.getItem('purchaseItems')) || []

    this.total = this.calTotal(this.items)
    this.DisabledPurchaseButton(this.total)

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
    this.DisabledPurchaseButton(this.total)
    localStorage.setItem('purchaseItems', JSON.stringify(this.items))
  }

  calTotal(items) {
    return this.items.reduce((pre, cur) => pre += cur.balance, 0);
  }

  createPurchaseProfile() {
    let loading = this.loadingCtrl.create({
      content: 'กำลังดำเนินการ...',
      spinner: 'crescent',
    });

    loading.present();

    let params = {
      buyer_id: this.buyer.id,
      seller_id: this.seller.id,
      account_saving_id: this.seller.account_saving_id,
      balance: this.total,
      items: this.items
    }

    this.purchaseItemsProvider.createPurchaseProfile(params)
      .subscribe((res) => {
        loading.dismiss();
        this.isHide = true
      })
  }

  DisabledPurchaseButton(total) {
    if (total <= 0) this.isDisabled = false
  }
}
