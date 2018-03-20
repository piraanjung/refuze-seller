webpackJsonp([14],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuPurchaseItemsPageModule", function() { return MainMenuPurchaseItemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_menu_purchase_items__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_main_menu_purchase_item_main_menu_purchase_item__ = __webpack_require__(386);
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

/***/ 386:
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

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuPurchaseItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_menu_purchase_item_main_menu_purchase_item__ = __webpack_require__(386);
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
            selector: 'page-main-menu-purchase-items',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/pages/main-menu-purchase-items/main-menu-purchase-items.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>หน้าหลักผู้รับซื้อขยะ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!--Theme Full Image Cards-->\n<ion-content>\n        <ion-grid no-padding *ngIf="data != null">\n            <ion-row>\n                <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 *ngFor="let item of data.items;let i = index">\n                    <ion-card padding text-center (click)="onEvent(\'onItemClick\', item.link, $event)">\n                        <div card-content>\n                            <img images-filter src="{{item.image}}" />\n                            <div card-title>{{item.title}}</div>\n                            <!-- <div card-subtitle>{{item.subtitle}}</div> -->\n                        </div>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-content>\n    <!--Fab Button-->\n    <ion-fab #fab bottom right>\n        <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n<!-- <ion-content class="card-background-page">\n  <ion-card *ngFor="let card of cards" [navPush]="card.link">\n    <img src="{{ card.img }}" />\n    <div class="card-title">{{ card.name }}</div>\n  </ion-card>\n</ion-content> -->\n<!--Theme Appearance animation (Zoom In)-->\n<!-- <ion-content has-header>\n    <ion-grid no-padding *ngIf="data == null">\n        <ion-row>\n            <ion-col col-12>\n                <ion-list no-margin>\n                    <ion-item no-lines [ngClass]="animateClass" *ngFor="let item of animateItems; let i = index;" (click)="onEvent(\'onItemClick\', item.title, $event)">\n                        <ion-avatar item-start>\n                            <img [src]="item.image" alt="{{item.title}}" />\n                        </ion-avatar>\n                        <h2 item-title padding-left>{{item.title}}</h2>\n                        <ion-icon icon-small item-right (click)="onEvent(\'onFavorite\', item, $event)">\n                            <i class="icon" [ngClass]="{\'icon-heart\': item.favorite, \'icon-heart-outline\': !item.favorite}"></i>\n                        </ion-icon>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n<!-- Fab Button \n<ion-fab #fab bottom right>\n    <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n    <ion-icon name="add"></ion-icon>\n  </button>\n</ion-fab> -->\n<!-- Theme List big image -->\n<!-- <ion-content has-header>\n    <ion-grid no-padding *ngIf="data != null">\n        <ion-row>\n            <ion-col col-12>\n                <ion-list no-margin>\n                    <ul no-margin no-padding class="collapsible">\n                        <li *ngFor="let group of data.items">\n                            <!-- List big image Header \n                            <div class="collapsible-header" (click)="toggleGroup(group)">\n                                <ion-item no-padding no-lines>\n                                    <ion-thumbnail item-start no-margin>\n                                        <img [src]="group.image" alt="{{group.title}}" />\n                                    </ion-thumbnail>\n                                    <div title-block>\n                                        <h2 padding-left item-title>{{group.title}}</h2>\n                                        <h3 padding-left item-subtitle>{{group.description}}</h3>\n                                    </div>\n                                    <div social>\n                                        <ion-icon>\n                                            <i ng-if="group.iconLike" class="icon {{group.iconLike}}" (click)="onEvent(\'onLike\', group, $event)"></i>\n                                        </ion-icon>\n                                        <ion-icon>\n                                            <i ng-if="group.iconFavorite" class="icon {{group.iconFavorite}}" (click)="onEvent(\'onFavorite\', group, $event)"></i>\n                                        </ion-icon>\n                                        <ion-icon>\n                                            <i ng-if="group.iconShare" class="icon {{group.iconShare}}" (click)="onEvent(\'onShare\', group, $event)"></i>\n                                        </ion-icon>\n                                    </div>\n                                </ion-item>\n                            </div>\n                            <!-- List big image Body -\n                            <div class="item-accordion" [ngClass]="{\'active\': isGroupShown(group) }" [hidden]="!isGroupShown(group)">\n                                <ion-item transparent no-lines *ngFor="let item of group.items;" (click)="onEvent(\'onItemClick\', item.title, $event)">\n                                    <ion-thumbnail item-left>\n                                        <img [src]="item.image" alt="{{item.title}}" />\n                                    </ion-thumbnail>\n                                    <h2 subitem-title>{{item.title}}</h2>\n                                    <h3 subitem-subtitle>{{item.description}}</h3>\n                                    <ion-icon white item-right><i class="icon {{item.iconPlay}}"></i></ion-icon>\n                                </ion-item>\n                            </div>\n                            <!--end-\n                        </li>\n                    </ul>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n<!-- Fab Button \n<ion-fab #fab bottom right>\n    <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', group, $event)">\n    <ion-icon name="add"></ion-icon>\n  </button>\n</ion-fab> -->\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/pages/main-menu-purchase-items/main-menu-purchase-items.html"*/,
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