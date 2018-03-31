import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Sellers } from '../../models/sellers';
import { API_URL, API_HEADERS } from '../api-urls';

@Injectable()
export class FindSellersProvider {

  constructor(private http: HttpClient) { }

  getSellers() {
    return this.http.get<Sellers[]>(`${API_URL}/sellers`, { headers: API_HEADERS })
  }

}
