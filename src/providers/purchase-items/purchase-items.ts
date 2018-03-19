import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../api-urls';
import { PurchaseTransactionHistory } from '../../models/purchase-items';

@Injectable()
export class PurchaseItemsProvider {

  constructor(private http: HttpClient) { }

  createPurchaseProfile(params) {
    return this.http.post(`${API_URL}/purchase-items/create`, params)
  }

  getPurchaseTransactionsHistoryBySellerId(id) {
    return this.http.get<PurchaseTransactionHistory[]>(`${API_URL}/purchases-items/history/seller/${id}`)
  }

}
