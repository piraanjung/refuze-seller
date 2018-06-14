import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../api-urls';
import { AccountSavingBalance } from '../../models/account-saving-balance';
import { AccountReceiveTransfer } from '../../models/account-receive-transfer';
import { ValidateTransferConfirm } from '../../models/validate-transfer-confirm';

@Injectable()
export class AccountSavingProvider {

  constructor(private http: HttpClient) {
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
    return this.http.get(`${API_URL}/account/validate-transfer-confirm/${transfer_passwords}`, { observe: 'response' });
  }

}
