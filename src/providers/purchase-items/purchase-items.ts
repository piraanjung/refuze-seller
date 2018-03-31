import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../api-urls';
import { PurchaseTransactionHistory } from '../../models/purchase-items';
import { Buyer } from '../../models/buyer';

@Injectable()
export class PurchaseItemsProvider {

  API_HEADERS: any
  constructor(private http: HttpClient) {
    let buyerProfile: Buyer = JSON.parse(localStorage.getItem('buyerProfile'))
    this.API_HEADERS = {
      Authorization: buyerProfile.remember_token
    }
  }

  createPurchaseProfile(params) {
    return this.http.post(`${API_URL}/purchase-items/create`, params, { headers: this.API_HEADERS })
  }

  getPurchaseTransactionsHistoryBySellerId(id) {
    return this.http.get<PurchaseTransactionHistory[]>(`${API_URL}/purchases-items/history/seller/${id}`, { headers: this.API_HEADERS })
  }

}
