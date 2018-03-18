// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MainMenuPurchaseItemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MainMenuPurchaseItemProvider {

  constructor() {
    console.log('Hello MainMenuPurchaseItemProvider Provider');
  }

  getDataForLayout3 = (): any => {
    return {
        "refreshMessage": "Pull to refresh...",
        "items": [
            {
                "id": 1,
                "image": "assets/images/background/0.jpg",
                "title": "ค้นหาผู้ขายขยะ",
                "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "link": 'find-seller'
            },
            {
                "id": 2,
                "image": "assets/images/background/9.jpg",
                "title": "ประวัติรับซื้อขยะ",
                "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "link": '#'
            },
        ]
    };
};

}
