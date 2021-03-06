import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, ToastController } from 'ionic-angular';
import * as WC from 'woocommerce-api';


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
      // url : "http://119.59.103.60/~web/wordpress/",
      url : "http://127.0.0.1/wordpress/",
      consumerKey : "ck_3530726d634b3a5710e968666df20098563fe199",
      consumerSecret : "cs_6413cbe754e6eab1c51514e7e247d4b4862a0c9a"
    });
    this.WooCommerce.getAsync("products").then((data) => {
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
      console.log(JSON.parse(data.body))
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
      this.navCtrl.push('search', {
        "searchQuery": this.searchQuery
      })
    }
  }

}
