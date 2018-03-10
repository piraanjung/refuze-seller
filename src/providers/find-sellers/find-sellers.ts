import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FindSellersProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FindSellersProvider Provider');
  }

}
