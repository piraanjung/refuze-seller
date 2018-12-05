import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api-urls';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the SellBottleInSchoolProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SellBottleInSchoolProvider {

  constructor(private http: HttpClient, public storage: Storage) {
    
  }
  getBottleBarcode(barcode){
    return this.http.get(`${API_URL}/get_jquery/check_bottle_barcode/${barcode}`)

  }

  savePurchaseItems(postInfo){
    return new Promise((resolve, reject) => {
      
   
        this.http.post(API_URL+'/get_jquery/store_bottles',  postInfo)
          .subscribe(data => {
            resolve(data);
          }, (err) => {
            reject(err);
          }); 
      }) 
   
  }

}
