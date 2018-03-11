import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api-urls';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item';

@Injectable()
export class ItemsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ItemsProvider Provider');
  }

  getFavorite() {
    return this.http.get<Item[]>(`${API_URL}/items-favorite`)
  }
}
