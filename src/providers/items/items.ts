import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api-urls';
import { Observable } from 'rxjs/Observable';
import { Item, ItemPrice } from '../../models/item';

@Injectable()
export class ItemsProvider {

  constructor(private http: HttpClient) { }

  getFavorite() {
    return this.http.get<Item[]>(`${API_URL}/items-favorite`)
  }

  getItems() {
    return this.http.get<Item[]>(`${API_URL}/items`)
  }

  setItemPrice(params: ItemPrice) {
    return this.http.put(`${API_URL}/items-update-price`, params)
  }
}
