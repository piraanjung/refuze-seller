webpackJsonp([38],{

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarLayout3Module", function() { return SearchBarLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_3__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchBarLayout3Module = (function () {
    function SearchBarLayout3Module() {
    }
    SearchBarLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_3__["a" /* SearchBarLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_bar_layout_3__["a" /* SearchBarLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_3__["a" /* SearchBarLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SearchBarLayout3Module);
    return SearchBarLayout3Module;
}());

//# sourceMappingURL=search-bar-layout-3.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarLayout3; });
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

var SearchBarLayout3 = (function () {
    function SearchBarLayout3() {
        this.searchTerm = "";
    }
    SearchBarLayout3.prototype.getItems = function (event) {
        var _this = this;
        if (!this.allItems) {
            this.allItems = this.data.items;
        }
        this.data.items = this.allItems.filter(function (item) {
            return item.title.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    SearchBarLayout3.prototype.onEvent = function (event, item) {
        if (this.events[event]) {
            if ('onTextChange' === event) {
                this.getItems(item);
                this.events[event](this.searchTerm);
            }
            else {
                this.events[event](item);
            }
        }
        console.log(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchBarLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchBarLayout3.prototype, "events", void 0);
    SearchBarLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search-bar-layout-3',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/search-bar/layout-3/search-bar.html"*/'<!-- Theme Search bars Field + header -->\n\n<ion-grid no-padding>\n\n    <ion-row *ngIf="data != null">\n\n        <!-- Header -->\n\n        <ion-col col-12>\n\n            <div background-size [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}" *ngIf=" data.headerImage != null">\n\n                <div class="search-bar-bcg">\n\n                    <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="onEvent(\'onTextChange\', $event)"></ion-searchbar>\n\n                </div>\n\n            </div>\n\n        </ion-col>\n\n        <!-- List -->\n\n        <ion-col col-12>\n\n            <ion-list no-margin>\n\n                <ion-item no-lines *ngFor="let item of data.items;" (click)="onEvent(\'onItemClick\', item)">\n\n                    <ion-icon icon-medium item-start>\n\n                        <i class="icon {{item.icon}}"></i>\n\n                    </ion-icon>\n\n                    <h2 item-title>{{item.title}}</h2>\n\n                    <h3 item-subtitle>{{item.description}}</h3>\n\n                    <item-content item-end>\n\n                    <span span-medium>{{item.price}}</span>\n\n                  </item-content>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/search-bar/layout-3/search-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarLayout3);
    return SearchBarLayout3;
}());

//# sourceMappingURL=search-bar-layout-3.js.map

/***/ })

});
//# sourceMappingURL=38.js.map