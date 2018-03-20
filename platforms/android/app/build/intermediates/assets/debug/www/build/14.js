webpackJsonp([14],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSellerPageModule", function() { return ProfileSellerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_seller__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileSellerPageModule = (function () {
    function ProfileSellerPageModule() {
    }
    ProfileSellerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_seller__["a" /* ProfileSellerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_seller__["a" /* ProfileSellerPage */]),
            ],
        })
    ], ProfileSellerPageModule);
    return ProfileSellerPageModule;
}());

//# sourceMappingURL=profile-seller.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileSellerPage; });
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


var ProfileSellerPage = (function () {
    function ProfileSellerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.FindItemsPage = 'find-items';
    }
    ProfileSellerPage.prototype.ionViewDidLoad = function () {
        localStorage.removeItem('purchaseItems');
        this.seller = JSON.parse(localStorage.getItem('sellerProfile'));
        if (Object.keys(this.seller).length !== 0) {
            this.id = this.id;
            this.fullname = this.seller.name + " " + this.seller.last_name;
            this.mobile = "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D " + this.seller.mobile;
            this.address = "\u0E1A\u0E49\u0E32\u0E19\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 " + this.seller.address + " \u0E15\u0E33\u0E1A\u0E25 " + this.seller.DISTRICT_NAME + " \u0E2D\u0E33\u0E40\u0E20\u0E2D " + this.seller.AMPHUR_NAME + " \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14 " + this.seller.PROVINCE_NAME + " " + this.seller.zipcode;
        }
    };
    ProfileSellerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile-seller',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/pages/profile-seller/profile-seller.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ProfileSeller</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-card-header>\n      ข้อมูลผู้ขาย\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <ion-img width="80" height="80" src="./assets/imgs/f_logo.png"></ion-img>\n          </ion-col>\n          <ion-col col-8>\n            <p>{{ fullname }}</p>\n            <p>{{ mobile }}</p>\n            <p>{{ address }}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n  <button ion-button block round [navPush]="FindItemsPage">รับซื้อขยะ</button>\n  <br>\n  <button ion-button block round (click)="goToHistorySeller()">ประวัติรับซื้อขยะ</button>\n</ion-content>\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/pages/profile-seller/profile-seller.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ProfileSellerPage);
    return ProfileSellerPage;
}());

//# sourceMappingURL=profile-seller.js.map

/***/ })

});
//# sourceMappingURL=14.js.map