import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api-urls';
import { PurchaseTransactionHistory } from '../../models/purchase-items';
import { Buyer } from '../../models/buyer';

@Injectable()
export class PurchaseItemsProvider {

  API_HEADERS: any
  constructor(private http: HttpClient) {
    let buyerProfile: Buyer = JSON.parse(localStorage.getItem('buyerProfile'))
    this.API_HEADERS = {
      token: buyerProfile.remember_token
    }
  }

  createPurchaseProfile(params): any {
    return this.http.post(`${API_URL}/purchase-items/create`, params, { headers: this.API_HEADERS })
  }

  getPurchaseTransactionsHistoryBySellerId(id): any {
    return this.http.get<PurchaseTransactionHistory[]>(`${API_URL}/purchase-items/seller-id/${id}`, { headers: this.API_HEADERS })
  }

}
