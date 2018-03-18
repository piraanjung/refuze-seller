import { Component, Input,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content, FabButton } from 'ionic-angular';
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
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  @ViewChild(FabButton)
  fabButton: FabButton;
  @Input() data: any={
    "items": [
      {
          "id": 1,
          "title": "Isaac Raid",
          "image": "assets/images/avatar/0.jpg",
          "favorite": true
      },
      {
          "id": 2,
          "title": "Jason Graham",
          "image": "assets/images/avatar/1.jpg",
          "favorite": false
      },
      {
          "id": 3,
          "title": "Abigail Ross",
          "image": "assets/images/avatar/2.jpg",
          "favorite": true
      },
      {
          "id": 4,
          "title": "Justin Rutherford",
          "image": "assets/images/avatar/3.jpg",
          "favorite": false
      },
      {
          "id": 5,
          "title": "Nicholas Henderson",
          "image": "assets/images/avatar/4.jpg",
          "favorite": false
      },
      {
          "id": 6,
          "title": "Elizabeth Mackenzie",
          "image": "assets/images/avatar/5.jpg",
          "favorite": true
      },
      {
          "id": 7,
          "title": "Melanie Ferguson",
          "image": "assets/images/avatar/6.jpg",
          "favorite": false
      },
      {
          "id": 8,
          "title": "Fiona Kelly",
          "image": "assets/images/avatar/7.jpg",
          "favorite": true
      },
      {
          "id": 9,
          "title": "Nicholas King",
          "image": "assets/images/avatar/8.jpg",
          "favorite": true
      },
      {
          "id": 10,
          "title": "Victoria Mitchell",
          "image": "assets/images/avatar/9.jpg",
          "favorite": true
      },
      {
          "id": 11,
          "title": "Sophie Lyman",
          "image": "assets/images/avatar/10.jpg",
          "favorite": false
      },
      {
          "id": 12,
          "title": "Carl Ince",
          "image": "assets/images/avatar/11.jpg",
          "favorite": false
      },
      {
          "id": 13,
          "title": "Michelle Slater",
          "image": "assets/images/avatar/12.jpg",
          "favorite": false
      },
      {
          "id": 14,
          "title": "Ryan Mathis",
          "image": "assets/images/avatar/13.jpg",
          "favorite": false
      },
      {
          "id": 15,
          "title": "Julia Grant",
          "image": "assets/images/avatar/14.jpg",
          "favorite": false
      },
      {
          "id": 16,
          "title": "Hannah Martin",
          "image": "assets/images/avatar/15.jpg",
          "favorite": false
      }
  ]

  };
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
    private purchaseItemsProvider: PurchaseItemsProvider
  ) {
    this.total = 0
    this.isHide = false
    this.isDisabled = true
    this.FindSellerPage ='find-seller'
    this.MainMenuPage ='main-menu-purchase-items'
    this.animateClass = { 'zoom-in': true };
  }

  ionViewDidLoad() {
    console.log(this.data)
    // this.seller = JSON.parse(localStorage.getItem('sellerProfile'))
    // this.buyer = JSON.parse(localStorage.getItem('BuyerProfile'))
    // this.items = JSON.parse(localStorage.getItem('purchaseItems')) || []
    // this.total = this.calTotal(this.items)
    // this.DisabledPurchaseButton(this.total)

    // if (Object.keys(this.seller).length !== 0 && Object.keys(this.items).length) {
    //   this.id = this.id
    //   this.fullname = `${this.seller.name} ${this.seller.last_name}`
    //   this.mobile = `เบอร์ติดต่อ ${this.seller.mobile}`
    //   this.address = `บ้านเลขที่ ${this.seller.address} ตำบล ${this.seller.DISTRICT_NAME} อำเภอ ${this.seller.AMPHUR_NAME} จังหวัด ${this.seller.PROVINCE_NAME} ${this.seller.zipcode}`
    // }

  }

  removeItem(index) {
    this.items.splice(index, 1)
    this.total = this.calTotal(this.items)
    this.DisabledPurchaseButton(this.total)
  }

  calTotal(items) {
    return this.items.reduce((pre, cur) => pre += cur.balance, 0);
  }

  createPurchaseProfile() {
    let params = {
      buyer_id: this.buyer.id,
      seller_id: this.seller.id,
      account_saving_id: this.seller.account_saving_id,
      balance: this.total,
      items: this.items
    }

    this.purchaseItemsProvider.createPurchaseProfile(params)
      .subscribe((res) => {
        this.isHide = true
      })
  }

  DisabledPurchaseButton(total) {
    if (total <= 0) this.isDisabled = false
  }
  onEvent(event: string, item: any, e: any) {
    if (e) {
        e.stopPropagation();
    }
    if (this.events[event]) {
        this.events[event](item);
    }
}
    ngAfterViewInit() {
        this.content.ionScroll.subscribe((d) => {
            this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    }

}
