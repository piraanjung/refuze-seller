webpackJsonp([13],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseItemsModalPageModule", function() { return PurchaseItemsModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchase_items_modal__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PurchaseItemsModalPageModule = (function () {
    function PurchaseItemsModalPageModule() {
    }
    PurchaseItemsModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__purchase_items_modal__["a" /* PurchaseItemsModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__purchase_items_modal__["a" /* PurchaseItemsModalPage */]),
            ],
        })
    ], PurchaseItemsModalPageModule);
    return PurchaseItemsModalPageModule;
}());

//# sourceMappingURL=purchase-items-modal.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseItemsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PurchaseItemsModalPage = (function () {
    function PurchaseItemsModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.amount = 1;
    }
    PurchaseItemsModalPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('item');
        this.id = this.item.id;
        this.name = this.item.name;
        this.unit_name = this.item.unit_name;
        this.price = this.item.price;
        this.balance = (this.amount * this.price);
        var items = JSON.parse(localStorage.getItem('purchaseItems')) || [];
        this.items = items;
    };
    PurchaseItemsModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss('close');
    };
    PurchaseItemsModalPage.prototype.addNewItem = function () {
        this.balance = (this.amount * this.price);
        var item = {
            name: this.name,
            unit_name: this.unit_name,
            item_id: this.id,
            price: this.price,
            amount: this.amount,
            balance: this.balance
        };
        this.items.push(item);
        localStorage.setItem('purchaseItems', JSON.stringify(this.items));
        this.viewCtrl.dismiss({ status: 'status', countItems: this.items.length });
    };
    PurchaseItemsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-purchase-items-modal',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/pages/purchase-items-modal/purchase-items-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>PurchaseItemsModal</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">ปิด</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<!--- Theme Parallax Product -->\n<!--- Header Big Image-->\n<ion-content elastic-header>\n  <div padding background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(assets/images/background/7.jpg)\'}">\n    <div class="title">\n      <h2 parallax-title>{{name}}</h2>\n      <h1 parallax-subtitle>{{ price }}&nbsp;บาท&nbsp;/&nbsp;{{ unit_name }}</h1>\n    </div>\n  </div>\n  <!--Content-->\n  <ion-grid class="grid" no-padding>\n\n    <ion-row class="row">\n\n      <ion-col  col-7 col-lg-4 col-md-7 col-sm-7 col-xl-4>\n\n        <ion-card padding text-center class="card card-md">\n\n          <div card-content>\n\n            <img images-filter src="assets/images/background/0.jpg">\n\n            <div card-title>จำนวน</div>\n\n            <div  class="amount_input">\n                <ion-input required type="number" class="" [(ngModel)]="amount"></ion-input>            \n            </div>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n      <ion-col col-5 col-lg-4 col-md-5 col-sm-5 col-xl-4>\n\n        <ion-card padding text-center class="card card-md">\n\n          <div card-content>\n\n            <img images-filter src="assets/images/background/10.jpg">\n\n            <div card-title>เป็นเงิน</div>\n\n            <div>\n                <div class="total">{{ price * amount }}</div>\n                <div card-subtitle>บาท</div>\n            </div>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n\n    </ion-row>\n\n  </ion-grid>\n  <ion-grid no-padding>\n    <ion-item no-padding transparent>\n      <ion-label floating>จำนวน</ion-label>\n      \n    </ion-item>\n  </ion-grid>\n  <ion-col offset-4>\n      <button  ion-button large round color="twitter" (click)="addNewItem()" >\n            บันทึกข้อมูล\n        </button>\n  </ion-col>\n  \n</ion-content>\n\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/pages/purchase-items-modal/purchase-items-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PurchaseItemsModalPage);
    return PurchaseItemsModalPage;
}());

//# sourceMappingURL=purchase-items-modal.js.map

/***/ })

});
//# sourceMappingURL=13.js.map