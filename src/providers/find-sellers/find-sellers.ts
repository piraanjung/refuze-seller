import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { API_URL } from '../api-urls';

@Injectable()
export class FindSellersProvider {

  constructor(private http: HttpClient) {
    console.log('Hello FindSellersProvider Provider');
  }

  getBuyers() {
    return this.http.get(`${API_URL}/buyers`)
  }
}
