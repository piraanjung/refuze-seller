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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.data.profile)
    this.seller = this.navParams.data.profile
  }

}
