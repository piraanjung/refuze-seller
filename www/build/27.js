webpackJsonp([27],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubImageGalleryModule", function() { return SubImageGalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_image_gallery__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubImageGalleryModule = (function () {
    function SubImageGalleryModule() {
    }
    SubImageGalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sub_image_gallery__["a" /* SubImageGallery */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sub_image_gallery__["a" /* SubImageGallery */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sub_image_gallery__["a" /* SubImageGallery */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SubImageGalleryModule);
    return SubImageGalleryModule;
}());

//# sourceMappingURL=sub-image-gallery.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubImageGallery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubImageGallery = (function () {
    function SubImageGallery(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.onEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
        this.openImageSlider = function (group, index) {
            _this.navCtrl.push(group.fullscreen, {
                'group': group.items,
                'index': index
            });
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SubImageGallery.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SubImageGallery.prototype, "events", void 0);
    SubImageGallery = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sub-image-gallery',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/sub-image-gallery/sub-image-gallery.html"*/'<!-- Theme Image Sub-Gallery for Category 1 -->\n\n<ion-grid no-padding *ngIf="data != null">\n\n    <ion-row no-margin no-padding>\n\n        <ion-col col-6 col-sm-3 col-md-6 col-lg-4 col-xl-3 no-margin no-padding *ngFor="let item of data.items;let i = index;">\n\n            <ion-card no-margin background-size (click)="openImageSlider(data, i)" [ngStyle]="{\'background-image\': \'url(\' + item.image + \')\'}">\n\n                <div gallery-title>\n\n                    <h2 item-title float-left>{{item.title}}</h2>\n\n                    <ion-icon white float-right (click)="onEvent(\'onFavorite\', item, $event)">\n\n                        <i class="icon" [ngClass]="{\'icon-heart\': item.favorite, \'icon-heart-outline\': !item.favorite}"></i>\n\n                    </ion-icon>\n\n                </div>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/sub-image-gallery/sub-image-gallery.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SubImageGallery);
    return SubImageGallery;
}());

//# sourceMappingURL=sub-image-gallery.js.map

/***/ })

});
//# sourceMappingURL=27.js.map