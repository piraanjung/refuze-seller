import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api-urls';
import { Buyer } from '../../models/buyer';
@Injectable()
export class AuthenProvider {

  constructor(private http: HttpClient) { }

  Authen(params): any {
    return this.http.post<Buyer>(`${API_URL}/authen`, params, { observe: 'response' });
  }

  AuthenByPasswordAndPhonNumber(params): any{
    return this.http.post(`${API_URL}/authen-by-password-and-phone`, params,{ observe: 'response' });
  }

}
