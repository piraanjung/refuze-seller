import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api-urls';

@Injectable()
export class ItemsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ItemsProvider Provider');
  }

  getFavorite() {
    
  }
}
