import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sellers } from '../../models/sellers';
import { FindSellersProvider } from '../../providers/find-sellers/find-sellers';

@IonicPage({
  name: 'find-seller'
})
@Component({
  selector: 'page-find-seller',
  templateUrl: 'find-seller.html',
})
export class FindSellerPage {
  items;
  sellers: Sellers[]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private findSeller: FindSellersProvider
  ) { }

  ionViewDidLoad() {
    localStorage.removeItem('purchaseItems')
    localStorage.removeItem('sellerProfile')
    this.getSellers()
  }

  getSellers() {
    this.findSeller.getSellers().subscribe((res) => {
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
      this.sellers = this.sellers.filter((seller) => {
        return (seller.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.getSellers()
    }
  }

}
