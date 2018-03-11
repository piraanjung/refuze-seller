import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { API_URL } from '../api-urls';
/*
  Generated class for the AuthenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthenProvider Provider'); 
  }

  resAuthen(data){
    return this.http.post(`${API_URL}/authen`, data);
  }

}
