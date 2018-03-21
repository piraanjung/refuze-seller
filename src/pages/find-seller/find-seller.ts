import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from 'ionic-angular';
import {
  Input,
  ViewChild
} from '@angular/core';
import {
  Content,
  FabButton,
  ItemSliding
} from 'ionic-angular';
import {
  Sellers
} from '../../models/sellers';
import {
  FindSellersProvider
} from '../../providers/find-sellers/find-sellers';
import {
  ProfileSellerPage
} from '../profile-seller/profile-seller';
import{
  PurchaseHistoryPage
} from '../purchase-history/purchase-history';

@IonicPage({
  name: 'find-seller'
})
@Component({
  selector: 'page-find-seller',
  templateUrl: 'find-seller.html',
})
export class FindSellerPage {
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  @ViewChild(FabButton)
  fabButton: FabButton;
  path: string;


  items;
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
    public navCtrl: NavController,
    public navParams: NavParams,
    private findSeller: FindSellersProvider,
    public loadingCtrl: LoadingController
  ) {
    this.FindItemsPage = 'find-items'
    this.animateClass = {
      'zoom-in': true
    };
    this.path = "assets/svg/bars.svg";

  }

  ionViewDidLoad() {
    localStorage.removeItem('purchaseItems')
    localStorage.removeItem('sellerProfile')
    this.getSellers()
    this.data = this.findSeller.getDataForLayout1()

  }

  getSellers() {
    let loading = this.loadingCtrl.create({
      content: '<ion-spinner name="lines"></ion-spinner>',
    });

    loading.present();

    setTimeout(() => {

      loading.dismiss();
    }, 2000);

    this.findSeller.getSellers().subscribe((res) => {
      this.sellers = res
      console.log(this.sellers)

    })
  }

  goToProfileSeller(profile) {
    localStorage.setItem('sellerProfile', JSON.stringify(profile))
    this.navCtrl.push('ProfileSellerPage')
  }

  getItems(ev) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.sellers = this.sellers.filter((seller) => {
        return (seller.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.getSellers()
    }
  }

  toggleGroup(group: any, profile) {
    console.log(profile)
    group.show = !group.show;
    localStorage.setItem('sellerProfile', JSON.stringify(profile))
    this.seller = JSON.parse(localStorage.getItem('sellerProfile'))
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
  ngOnChanges(changes: {
    [propKey: string]: any
  }) {
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
    console.log(seller)
    this.navCtrl.push('PurchaseHistoryPage',{
      seller : seller
    })
  }

}
