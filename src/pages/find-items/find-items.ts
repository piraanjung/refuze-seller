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



}
