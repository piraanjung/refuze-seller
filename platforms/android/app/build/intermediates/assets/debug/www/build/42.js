webpackJsonp([42],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLayout1Module", function() { return RegisterLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_layout_1__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterLayout1Module = (function () {
    function RegisterLayout1Module() {
    }
    RegisterLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_layout_1__["a" /* RegisterLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_layout_1__["a" /* RegisterLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register_layout_1__["a" /* RegisterLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], RegisterLayout1Module);
    return RegisterLayout1Module;
}());

//# sourceMappingURL=register-layout-1.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterLayout1; });
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

var RegisterLayout1 = (function () {
    function RegisterLayout1() {
        var _this = this;
        this.onEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password,
                    'country': _this.country,
                    'city': _this.city,
                    'email': _this.email
                });
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RegisterLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RegisterLayout1.prototype, "events", void 0);
    RegisterLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'register-layout-1',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/register/layout-1/register.html"*/'<!-- Themes Register + logo -->\n\n<ion-content has-header background-size default-background>\n\n    <ion-grid *ngIf="data != null">\n\n        <ion-row wrap padding>\n\n            <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <!--Form-->\n\n                <div class="form">\n\n                    <!--Form Title-->\n\n                    <h1 title text-right>{{data.register}}</h1>\n\n                    <!---Input field username-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>{{data.username}}</ion-label>\n\n                        <ion-input required type="text" [(ngModel)]="username"></ion-input>\n\n                    </ion-item>\n\n                    <!---Input field password-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>{{data.password}}</ion-label>\n\n                        <ion-input required type="password" [(ngModel)]="password"></ion-input>\n\n                    </ion-item>\n\n                    <!---Input field email-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>{{data.email}}</ion-label>\n\n                        <ion-input required type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="email"></ion-input>\n\n                    </ion-item>\n\n                    <!---Input field country-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>{{data.country}}</ion-label>\n\n                        <ion-input required type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="country"></ion-input>\n\n                    </ion-item>\n\n                    <!---Input field city-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>{{data.city}}</ion-label>\n\n                        <ion-input required type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="city"></ion-input>\n\n                    </ion-item>\n\n                    <!---Register button-->\n\n                    <button ion-button float-right clear button-clear (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n\n                </div>\n\n                <div logo>\n\n                    <!---Logo-->\n\n                    <img float-left [src]="data.logo" *ngIf="data.logo != null" />\n\n                    <!---Skip button-->\n\n                    <button ion-button float-right clear button-clear (click)="onEvent(\'onSkip\')">{{data.skip}}</button>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/register/layout-1/register.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RegisterLayout1);
    return RegisterLayout1;
}());

//# sourceMappingURL=register-layout-1.js.map

/***/ })

});
//# sourceMappingURL=42.js.map