import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_URL} from '../../providers/api-urls';
import { SellBottleInSchoolProvider} from '../../providers/sell-bottle-in-school/sell-bottle-in-school';
// import { Http, Headers } from '@angular/http'
// import 'rxjs/add/operator/map'
// import { RequestOptions } from '@angular/http';

@IonicPage({
  'name' : 'cart-lists'
})
@Component({
  selector: 'page-cart-lists',
  templateUrl: 'cart-lists.html',
})
export class CartListsPage {
  purchaseItems: any =[]
  myInfo = {
 
    name:'piraab', 
    details:'jja' 
    
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sellBottleSchollerProvider: SellBottleInSchoolProvider,
    ) {
    let items =   localStorage.getItem('purchaseItems')
    this.purchaseItems = JSON.parse(items)
    this.purchaseItems.image = API_URL+'/images/'+this.purchaseItems.image_url;
  
    console.log(this.purchaseItems)
  }

  ionViewDidLoad() {
    

  }

  savePurchaseItems(){
    this.sellBottleSchollerProvider.savePurchaseItems(this.purchaseItems).then((result)=>{
      console.log(JSON.stringify(result))
      // this.navCtrl.pop()
    },(err)=>{
      console.log("insert err: "+ err)
      // console.log("this.myInfo: "+ JSON.stringify(this.purchaseItems))
    })
  }

}
