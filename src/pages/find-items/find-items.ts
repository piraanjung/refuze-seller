import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ItemsProvider } from '../../providers/items/items';
import { Item } from '../../models/item';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';
import { Sellers } from '../../models/sellers';


@IonicPage({
  name: 'find-items'
})
@Component({
  selector: 'page-find-items',
  templateUrl: 'find-items.html',
})
export class FindItemsPage {
  items: Item[]
  countItems: number
  PurchaseItems:string
  seller: Sellers
  @Input() data: any={
    "title": "ค้นหาชนิดขยะ",
    "description": "ทำการพิมพ์ชื่อขยะเพื่อทำการค้นหา",
    "shortDescription": "35:72",
    "iconLike": "icon-thumb-up",
    "iconFavorite": "icon-heart",
    "iconShare": "icon-share-variant",
    "iconPlay": "icon-play-circle-outline",
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private itemsProvider: ItemsProvider,
    private findSeller: FindSellersProvider) {
    this.countItems = 0
    this.PurchaseItems = 'purchase-items'
  }

  ionViewDidLoad() {
    this.getFavorite()
    console.log(this.data)
    // localStorage.removeItem('purchaseItems')
  }

  getFavorite() {
    this.itemsProvider.getFavorite().subscribe((res) => this.items = res)
  }

  filterItems(ev) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.getItems(val)
    } else {
      this.getFavorite()
    }
  }

  getItems(val) {
    this.itemsProvider.getItems().subscribe((res) => {
      this.items = res.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }, (err) => console.log(err))
  }

  presentaddModalItem(item) {
    let profileModal = this.modalCtrl.create('purchase-items-modal', { item: item });
    profileModal.onDidDismiss(data => {
      this.countItems = data['countItems']
    });

    profileModal.present();
  }

  // toggleGroup(group: any,profile) {
  //   console.log(profile)
  //   group.show = !group.show;
  //   localStorage.setItem('sellerProfile', JSON.stringify(profile))
  //   this.seller = JSON.parse(localStorage.getItem('sellerProfile'))
  //   if (Object.keys(this.seller).length !== 0) {
      // this.id = this.id
      // this.fullname = `${this.seller.name} ${this.seller.last_name}`
      // this.mobile = `เบอร์ติดต่อ ${this.seller.mobile}`
      // this.address = `บ้านเลขที่ ${this.seller.address} ตำบล ${this.seller.DISTRICT_NAME} อำเภอ ${this.seller.AMPHUR_NAME} จังหวัด ${this.seller.PROVINCE_NAME} ${this.seller.zipcode}`
  //   }
  // }

  // isGroupShown(group: any) {
  //   return group.show;
  // }

}
