import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import * as WC from 'woocommerce-api';
// import { ProductDetailsPage } from '../product-details/product-details';

@IonicPage({
  name : 'search'
 })
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  products: any[] = [];
  searchQuery : string ="";
  WooCommerce :any;
  page:number =2;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController) {
    console.log(this.navParams.get('searchQuery'));
    this.searchQuery = this.navParams.get('searchQuery');

    this.WooCommerce = WC({
      // url : "http://119.59.103.60/~web/wordpress/",
      url : "http://localhost/wordpress",
      consumerKey : "ck_34dadcc1e5889f956eb53c58d25e1705859742af",
      consumerSecret : "cs_ac5ab442e936cfaf94f0b2746e8b5da59d337342"
    });

    this.WooCommerce.getAsync('products?filter[q]='+ this.searchQuery).then((searchData)=>{
      this.products = JSON.parse(searchData.body).products
    },(err)=>{
      console.log(err)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  loadMoreProducts(event){
    this.WooCommerce.getAsync('ajax_api_handle_request?user_id=1').then((data)=>{
      console.log(data);
    },(err)=>{
      console.log(err)
    })
    this.WooCommerce.getAsync('products?filter[q]='+ this.searchQuery + "&page="+this.page).then((searchData)=>{
      this.products = this.products.concat(JSON.parse(searchData.body).products);

      if(JSON.parse(searchData.body).products.length < 10){
        event.enable(false);
        this.toastCtrl.create({
          message : "No more products",
          duration : 5000
        }).present();
      }
      event.complete();
      this.page ++;
    },(err)=>{
      console.log(err)
    })
  }

  openProductPage(product){
    this.navCtrl.push('ProductDetailsPage', {
      'product' : product
    })
  }

}
