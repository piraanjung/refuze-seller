import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { HomePage } from '../home/home';
import * as WC from 'woocommerce-api';

/**
 * Generated class for the ShoppingCartMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name : 'shopping-cart-menu'
})
@Component({
  selector: 'page-shopping-cart-menu',
  templateUrl: 'shopping-cart-menu.html',
})
export class ShoppingCartMenuPage {

  Woocommerce: any;
  homePage : any;
  categories : any[];
  @ViewChild('content') chlidNavCtrl : NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homePage = 'shopping-cart';
    this.categories =[]

    this.Woocommerce = WC({
      url : "http://119.59.103.60/~web/wordpress/",
      consumerKey : "ck_34dadcc1e5889f956eb53c58d25e1705859742af",
      consumerSecret : "cs_ac5ab442e936cfaf94f0b2746e8b5da59d337342"
    });

    this.Woocommerce.getAsync("products/categories").then((data) => {
      console.log(JSON.parse(data.body).product_categories)
      let temp : any[] = JSON.parse(data.body).product_categories

      for(let i=0; i < temp.length; i++){
        if(temp[i].count > 0){
          if(temp[i].parent == 0){
            if(temp[i].slug == "clothing"){
              temp[i].icon = 'shirt';
            }
            if(temp[i].slug == "music"){
              temp[i].icon = 'musical-notes';
            }
            if(temp[i].slug == "posters"){
              temp[i].icon = 'images';
            }
            if(temp[i].slug == "hoodies"){
              temp[i].icon = 'cart';
            }
            this.categories.push(temp[i]);
          }
        }
      }
      // this.products = JSON.parse(data.body).products
    }, (error) => {
      console.log(error)
    })
  }

  openCategoryPage(category){
    this.chlidNavCtrl.setRoot('ProductsByCategoryPage', {
      'category' : category
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
