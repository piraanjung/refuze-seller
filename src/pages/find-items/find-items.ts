import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemsProvider } from '../../providers/items/items';
import { Item } from '../../models/item';
@IonicPage({
  name: 'find-items'
})
@Component({
  selector: 'page-find-items',
  templateUrl: 'find-items.html',
})
export class FindItemsPage {
  items: Item[]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private itemsProvider: ItemsProvider) { }

  ionViewDidLoad() {
    this.getFavorite()
  }

  getFavorite() {
    this.itemsProvider.getFavorite().subscribe((res) => this.items = res)
  }

  getItems(ev) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.getFavorite()
    }
  }

}
