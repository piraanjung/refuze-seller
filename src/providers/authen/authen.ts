import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { API_URL } from '../api-urls';
import { Buyer } from '../../models/buyer';
@Injectable()
export class AuthenProvider {

  constructor(private http: HttpClient) { }

  resAuthen(params) {
    return this.http.post<Buyer>(`${API_URL}/authen`, params);
  }

}
