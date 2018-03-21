webpackJsonp([73],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxLayout3Module", function() { return CheckBoxLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_box_layout_3__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckBoxLayout3Module = (function () {
    function CheckBoxLayout3Module() {
    }
    CheckBoxLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__check_box_layout_3__["a" /* CheckBoxLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__check_box_layout_3__["a" /* CheckBoxLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__check_box_layout_3__["a" /* CheckBoxLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], CheckBoxLayout3Module);
    return CheckBoxLayout3Module;
}());

//# sourceMappingURL=check-box-layout-3.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckBoxLayout3; });
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

var CheckBoxLayout3 = (function () {
    function CheckBoxLayout3() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], CheckBoxLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], CheckBoxLayout3.prototype, "events", void 0);
    CheckBoxLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'check-box-layout-3',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/check-box/layout-3/check-box.html"*/'<!--Themes With avatar -->\n\n<ion-grid no-padding *ngIf="data != null">\n\n    <ion-row>\n\n        <ion-col col-12 no-padding>\n\n            <ion-list margin>\n\n                <ion-item no-lines margin-top *ngFor="let item of data; let i = index;" (tap)="onEvent(\'onButton\', item)">\n\n                    <ion-icon icon-small item-start no-adding no-margina>\n\n                        <i class="icon {{item.icon}}"></i></ion-icon>\n\n                    <ion-label item-title>{{item.title}}</ion-label>\n\n                    <ion-checkbox item-end [checked]="item.favorite"></ion-checkbox>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/check-box/layout-3/check-box.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CheckBoxLayout3);
    return CheckBoxLayout3;
}());

//# sourceMappingURL=check-box-layout-3.js.map

/***/ })

});
//# sourceMappingURL=73.js.map