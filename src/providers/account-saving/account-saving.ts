import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api-urls';
import { AccountSavingBalance } from '../../models/account-saving-balance';
import { AccountReceiveTransfer } from '../../models/account-receive-transfer';

@Injectable()
export class AccountSavingProvider {

  constructor(private http: HttpClient) {
  }

  getAccountSavingBalance(user_id: number) {
    return this.http.get<AccountSavingBalance>(`${API_URL}/account/find-account-saving-by-user-id/${user_id}`);
  }

  getUserProfileReceiveTransfer(mobile: string) {
    return this.http.get<AccountReceiveTransfer>(`${API_URL}/users/find-by-mobile/${mobile}`);
  }

}
