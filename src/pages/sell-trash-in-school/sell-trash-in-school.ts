import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { SellBottleInSchoolProvider} from '../../providers/sell-bottle-in-school/sell-bottle-in-school';
import { API_URL} from '../../providers/api-urls';

@IonicPage({
  'name': 'sell-trash-in-school'
})
@Component({
  selector: 'page-sell-trash-in-school',
  templateUrl: 'sell-trash-in-school.html',
})
export class SellTrashInSchoolPage {
  res:any=''
  options: BarcodeScannerOptions
  encodeText:string = ''
  encodedData: any = {}
  scanData: any={};
  image_url:string =""
  data: any={}
  countItems: number
  items:any = {}
  purchaseItems:any =[]

  constructor(
    public navCtrl: NavController, 
    public barcodeScanner: BarcodeScanner,
    public sellBottleInSchollProvider : SellBottleInSchoolProvider
  ){
    this.countItems = 0    
   this.findBottleBarcode('8851952350161')
    
  }

  findBottleBarcode(barcode){
    this.sellBottleInSchollProvider.getBottleBarcode(barcode).subscribe((res) =>{
      // console.log(res)
       this.data = res
       this.data.image =  API_URL+'/images/'+this.data[0]['image']
       this.data.barcode = res[0].barcode
       this.data.product_name = res[0].product_name
       this.data.volume = res[0].volume
       this.data.description = res[0].comment
       console.log(this.data)
     })
  }

  scan(){
    this.options ={
      prompt:'Scan Barcode'
    };
    this.barcodeScanner.scan(this.options).then((data) =>{
      this.scanData = data;
      
      this.sellBottleInSchollProvider.getBottleBarcode('8851952350161').subscribe((res) => {
        console.log(res)
      })
    }, (err)=>{
      console.log(err)
    })
  }

  resetData(){
    this.data.image =  ''
    this.data.barcode = ''
    this.data.product_name = ''
    this.data.volume = ''
    this.data.description = ''
    this.data = false
    this.findBottleBarcode('8851952350147')

  }

  setItemsPurchase(data){
// console.log(data)
    this.items.id = data[0].id  
    this.items.product_name = data[0].product_name 
    this.items.volume = data[0].volume
    this.items.barcode = data[0].barcode
    this.items.unit_id = data[0].unit_id 
    this.items.item_categories_name = data[0].item_cate_id
    this.items.image_url = data[0].image
    localStorage.setItem('purchaseItems', JSON.stringify(this.items))
    this.countItems += 1
    this.resetData()
  }
  gotoCart(){
    this.navCtrl.push('cart-lists')
  }
  // encode(){
  //   this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeText).then((data)=>{
  //     this.encodedData = data
  //   }, (err)=>{
  //     console.log(err)
  //   })
  // }

}
