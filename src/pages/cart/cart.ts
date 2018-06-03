import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CheckOutPage } from '../check-out/check-out';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  showEmptyCartMessage: boolean = false;
  cartItems :any[] =[];
  total : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public storage : Storage, public viewCtrl : ViewController, 
    public toastController : ToastController) {
      this.total = 0.0
      this.storage.ready().then(() => {
        this.storage.get('cart').then((data) => {
          this.cartItems = data;
          console.log(this.cartItems)

          if(this.cartItems.length > 0){
            this.cartItems.forEach((item, index) => {
              this.total = this.total + (item.product.price * item.qty);
            })
          }else{
            this.showEmptyCartMessage = true;
          }
        })
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  removeFromCart(item,i){
    let price = item.product.price;
    let qty = item.qty;

    this.cartItems.splice(i, 1);

    this.storage.set('cart', this.cartItems).then(()=>{
      this.total = this.total - (price*qty);
    });

    if(this.cartItems.length == 0){
      this.showEmptyCartMessage = true;
    }
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  checkout(){
    this.navCtrl.push(CheckOutPage);
  }

  changeQty(item, i, change){
    let price = 0;
    let qty = 0;

    price = parseFloat(item.product.price);
    qty = item.qty;

    if(change < 0 && item.qty == 0){
      return;
    }

    qty = qty + change;
    item.qty = qty;
    item.amount = qty * price;
    this.cartItems[i] = item;

    this.storage.set('cart', this.cartItems).then(() => {
      this.toastController.create({
        message: 'Cart Updated',
        duration: 2000,
        showCloseButton: true,
      }).present();
    })
  }

}
