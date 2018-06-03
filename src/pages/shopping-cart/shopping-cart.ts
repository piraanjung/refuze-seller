import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, ToastController } from 'ionic-angular';
import * as WC from 'Woocommerce-api';
/**
 * Generated class for the ShoppingCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name : "shopping-cart"
})
@Component({
  selector: 'page-shopping-cart',
  templateUrl: 'shopping-cart.html',
})
export class ShoppingCartPage {
  WooCommerce : any;
  products : any[];
  moreProducts : any[];
  page : number;
  searchQuery : string = "";
  @ViewChild('productSlides') productSlides : Slides;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.page =2;
    this.WooCommerce = WC({
      url : "http://119.59.103.60/~web/wordpress/",
      consumerKey : "ck_34dadcc1e5889f956eb53c58d25e1705859742af",
      consumerSecret : "cs_ac5ab442e936cfaf94f0b2746e8b5da59d337342"
    });
    this.WooCommerce.getAsync("products").then((data) => {
      // console.log(JSON.parse(data.body.products))
      this.products = JSON.parse(data.body).products
    }, (error) => {
      console.log(error)
    })

    this.loadMoreProducts(null)
  }

  ionViewDidLoad(){
    setInterval(() =>{
      if(this.productSlides.getActiveIndex() == this.productSlides.length() -1 )
        this.productSlides.slideTo(0)
      this.productSlides.slideNext();
    }, 3000)
  }

  loadMoreProducts(event){
    if(event == null){
      this.page = 2;
      this.moreProducts = []
    }
    else
      this.page ++

    this.WooCommerce.getAsync("products?page="+this.page).then((data) => {
      // console.log(JSON.parse(data.body.products))
      this.moreProducts = this.moreProducts.concat(JSON.parse(data.body).products);

      if(event != null){
        event.complete();
      }

      if(JSON.parse(data.body).products.length < 10){
        event.enable(false)
        this.toastCtrl.create({
          message : "No more products",
          duration : 5000
        }).present();
      }
    }, (error) => {
      console.log(error)
    })
  }

  openProductPage(product){
    this.navCtrl.push('ProductDetailsPage', {
      'product' : product
    });
  }

  onSearch(event){
    if(this.searchQuery.length > 0){
      this.navCtrl.push('SearchPage', {
        "searchQuery": this.searchQuery
      })
    }
  }

}
