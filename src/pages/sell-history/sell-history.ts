import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PurchaseItemsProvider } from "../../providers/purchase-items/purchase-items"


@IonicPage({
  name : 'sell-history'
})
@Component({
  selector: 'page-sell-history',
  templateUrl: 'sell-history.html',
})
export class SellHistoryPage {
  user : any
  sellHisLists : any
  data :any = {
    "items": [
      {
          "title": "Where to go",
          "icon": "icon-map-marker-radius",
          "items": [
              "Monuments",
              "Sightseeing",
              "Historical",
              "Sport"
          ]
      },
      {
          "title": "Where to sleep",
          "icon": "icon-hotel",
          "items": [
              "Hotels",
              "Hostels",
              "Motels",
              "Rooms"
          ]
      },
      {
          "title": "Where to eat",
          "icon": "icon-silverware-variant",
          "items": [
              "Fast Food",
              "Restorants",
              "Pubs",
              "Hotels"
          ]
      },
      {
          "title": "Where to drink",
          "icon": "icon-martini",
          "items": [
              "Caffes",
              "Bars",
              "Pubs",
              "Clubs"
          ]
      },
      {
          "title": "Where to go",
          "icon": "icon-map-marker-radius",
          "items": [
              "Monuments",
              "Sightseeing",
              "Historical",
              "Sport"
          ]
      }
  ]
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private purchaseItem : PurchaseItemsProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseHistoryPage');
    this.user = this.navParams.get('seller');
    console.log(this.user.id)
    this.purchaseItem.getPurchaseTransactionsHistoryBySellerId(this.user.id)
    .subscribe((res) => {
      this.sellHisLists = res
      console.log(this.sellHisLists)
    })
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

}

