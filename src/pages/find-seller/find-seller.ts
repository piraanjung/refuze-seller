import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';
import { ProfileSellerPage } from '../profile-seller/profile-seller';
import { PurchaseHistoryPage } from '../purchase-history/purchase-history';

@IonicPage({
  name: 'find-seller'
})
@Component({
  selector: 'page-find-seller',
  templateUrl: 'find-seller.html',
})
export class FindSellerPage {
  data: any
  sellers: Sellers[];
  seller: Sellers
  id: number
  address: string
  mobile: string
  fullname: string
  image_url: string
  FindItemsPage: string
  animateItems = [];
  animateClass: any;

  constructor(
    private navCtrl: NavController,
    private findSeller: FindSellersProvider,
    private loadingCtrl: LoadingController
  ) {
    localStorage.removeItem('purchaseItems')
    localStorage.removeItem('sellerProfile')
    this.FindItemsPage = 'find-items'
    this.animateClass = { 'zoom-in': true };
  }

  ionViewDidLoad() {
    this.getSellers()
    this.data = this.findSeller.getDataForLayout1()
  }

  getSellers() {
    let loading = this.loadingCtrl.create({
      content: 'กำลังดำเนินการ...',
      spinner: 'crescent',
    });

    loading.present();

    this.findSeller.getSellers().subscribe((res) => {
      loading.dismiss();
      this.sellers = res
    })
  }

  goToProfileSeller(profile) {
    localStorage.setItem('sellerProfile', JSON.stringify(profile))
    this.navCtrl.push('ProfileSellerPage')
  }

  getItems(ev) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.sellers = this.sellers.filter((seller) => (seller.name.toLowerCase().indexOf(val.toLowerCase()) > -1))
    } else {
      this.getSellers()
    }
  }

  toggleGroup(group: any, profile) {
    group.show = !group.show;
    localStorage.setItem('sellerProfile', JSON.stringify(profile))
    this.seller = profile

    if (Object.keys(this.seller).length !== 0) {
      this.id = this.id
      this.fullname = `${this.seller.name} ${this.seller.last_name}`
      this.mobile = `เบอร์ติดต่อ ${this.seller.mobile}`
      this.address = `บ้านเลขที่ ${this.seller.address} ตำบล ${this.seller.DISTRICT_NAME} อำเภอ ${this.seller.AMPHUR_NAME} จังหวัด ${this.seller.PROVINCE_NAME} ${this.seller.zipcode}`
    }
  }

  isGroupShown(group: any) {
    return group.show;
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    let that = this;
    that.data = changes['data'].currentValue;
    if (that.data && that.data.items) {
      for (let i = 0; i < that.data.items.length; i++) {
        setTimeout(function () {
          that.animateItems.push(that.data.items[i]);
        }, 200 * i);
      }
    }
  }

  goToHistorySeller(seller) {
    this.navCtrl.push('PurchaseHistoryPage', {
      seller: seller
    })
  }

}
