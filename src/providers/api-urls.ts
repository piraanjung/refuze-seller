<<<<<<< HEAD

import { Buyer } from '../models/buyer'
let buyerProfile: Buyer
buyerProfile = {
  id: 0,
  remember_token: ''
}

if (localStorage.getItem('buyerProfile') != null) {
  let buyerLocalStorage: Buyer = JSON.parse(localStorage.getItem('buyerProfile'));
  buyerProfile.remember_token = buyerLocalStorage.remember_token
}

export const API_HEADERS = {
  Authorization: buyerProfile.remember_token
  // 'Authorization': 'SXZHRlpESlR1dGZEU09kVFJoWkVpMU1HMzV1UlZJakU1NkZoeTlFNw=='
}

=======
>>>>>>> 272b9afa22b3e5ba5ee7e99d9ef0c3a7af00f0a7
export const API_URL = 'http://188.166.177.172/refuze-api/public/index.php';
// export const API_URL = 'http://localhost:9000';
