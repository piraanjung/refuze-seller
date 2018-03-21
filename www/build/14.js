webpackJsonp([14],{

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuPurchaseItemsPageModule", function() { return MainMenuPurchaseItemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_menu_purchase_items__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_main_menu_purchase_item_main_menu_purchase_item__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MainMenuPurchaseItemsPageModule = (function () {
    function MainMenuPurchaseItemsPageModule() {
    }
    MainMenuPurchaseItemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main_menu_purchase_items__["a" /* MainMenuPurchaseItemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main_menu_purchase_items__["a" /* MainMenuPurchaseItemsPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_main_menu_purchase_item_main_menu_purchase_item__["a" /* MainMenuPurchaseItemProvider */]
            ]
        })
    ], MainMenuPurchaseItemsPageModule);
    return MainMenuPurchaseItemsPageModule;
}());

//# sourceMappingURL=main-menu-purchase-items.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuPurchaseItemProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';

/*
  Generated class for the MainMenuPurchaseItemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MainMenuPurchaseItemProvider = (function () {
    function MainMenuPurchaseItemProvider() {
        this.data = function () {
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
        console.log('Hello MainMenuPurchaseItemProvider Provider');
    }
    MainMenuPurchaseItemProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MainMenuPurchaseItemProvider);
    return MainMenuPurchaseItemProvider;
}());

//# sourceMappingURL=main-menu-purchase-item.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuPurchaseItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_menu_purchase_item_main_menu_purchase_item__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainMenuPurchaseItemsPage = (function () {
    function MainMenuPurchaseItemsPage(navCtrl, navParams, mainMenuPurchaseItemProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mainMenuPurchaseItemProvider = mainMenuPurchaseItemProvider;
        this.animateItems = [];
        this.animateClass = { 'fade-in-left-item': true };
        this.data = mainMenuPurchaseItemProvider.data();
    }
    MainMenuPurchaseItemsPage.prototype.ionViewDidLoad = function () {
        localStorage.removeItem('purchaseItems');
        localStorage.removeItem('sellerProfile');
    };
    MainMenuPurchaseItemsPage.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (item != "#") {
            this.navCtrl.push(item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], MainMenuPurchaseItemsPage.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], MainMenuPurchaseItemsPage.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], MainMenuPurchaseItemsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */])
    ], MainMenuPurchaseItemsPage.prototype, "fabButton", void 0);
    MainMenuPurchaseItemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-main-menu-purchase-items',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/pages/main-menu-purchase-items/main-menu-purchase-items.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>หน้าหลักผู้รับซื้อขยะ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!--Theme Full Image Cards-->\n<ion-content>\n        <ion-grid no-padding *ngIf="data != null">\n            <ion-row>\n                <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 *ngFor="let item of data.items;let i = index">\n                    <ion-card padding text-center (click)="onEvent(\'onItemClick\', item.link, $event)">\n                        <div card-content>\n                            <img images-filter src="{{item.image}}" />\n                            <div card-title>{{item.title}}</div>\n                            <!-- <div card-subtitle>{{item.subtitle}}</div> -->\n                        </div>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-content>\n\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/pages/main-menu-purchase-items/main-menu-purchase-items.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_main_menu_purchase_item_main_menu_purchase_item__["a" /* MainMenuPurchaseItemProvider */]])
    ], MainMenuPurchaseItemsPage);
    return MainMenuPurchaseItemsPage;
}());

//# sourceMappingURL=main-menu-purchase-items.js.map

/***/ })

});
//# sourceMappingURL=14.js.map