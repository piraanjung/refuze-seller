import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FindSellersProvider {

  constructor(private http: HttpClient) {
    console.log('Hello FindSellersProvider Provider');
  }

  getBuyers() {
    return this.http.get('/buyers')
  }
}
