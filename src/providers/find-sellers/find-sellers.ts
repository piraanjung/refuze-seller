import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { API_URL } from '../api-urls';

@Injectable()
export class FindSellersProvider {

  constructor(private http: HttpClient) { }

  getBuyers() {
    console.log(API_URL)
    return this.http.get(`${API_URL}/buyers`)
  }
}
