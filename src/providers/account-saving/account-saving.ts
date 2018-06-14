import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api-urls';
import { AccountSavingBalance } from '../../models/account-saving-balance';
import { AccountReceiveTransfer } from '../../models/account-receive-transfer';
import { ValidateTransferConfirm } from '../../models/validate-transfer-confirm';
import { Sellers } from '../../models/sellers';

@Injectable()
export class AccountSavingProvider {

  API_HEADERS: any
  constructor(private http: HttpClient) {
    let sellerProfile: Sellers = JSON.parse(localStorage.getItem('sellerProfile'))
    this.API_HEADERS = {
      token: sellerProfile.remember_token
    }
  }

  getAccountSavingBalanceByUserId(user_id: number) {
    return this.http.get<AccountSavingBalance>(`${API_URL}/account/find-account-saving-by-user-id/${user_id}`);
  }

  getAccountSavingBalanceByAccountId(account_id: number) {
    return this.http.get<AccountSavingBalance>(`${API_URL}/account/find-account-saving-by-account-id/${account_id}`, { observe: 'response' });
  }

  getUserProfileReceiveTransfer(mobile: string) {
    return this.http.get<AccountReceiveTransfer>(`${API_URL}/users/find-by-mobile/${mobile}`);
  }

  validateTransferConfirm(transfer_passwords: number) {
    return this.http.get(`${API_URL}/account/validate-transfer-passwords/${transfer_passwords}`, { headers: this.API_HEADERS, observe: 'response' });
  }

}
