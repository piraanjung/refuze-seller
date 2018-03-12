import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../api-urls';

@Injectable()
export class PurchaseItemsProvider {

  constructor(private http: HttpClient) { }

  createPurchaseProfile(params) {
    return this.http.post(`${API_URL}/purchase-items/create`, params)
  }

}
