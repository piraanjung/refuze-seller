webpackJsonp([57],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleCardLayout1Module", function() { return GoogleCardLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_card_layout_1__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GoogleCardLayout1Module = (function () {
    function GoogleCardLayout1Module() {
    }
    GoogleCardLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__google_card_layout_1__["a" /* GoogleCardLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__google_card_layout_1__["a" /* GoogleCardLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__google_card_layout_1__["a" /* GoogleCardLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], GoogleCardLayout1Module);
    return GoogleCardLayout1Module;
}());

//# sourceMappingURL=google-card-layout-1.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCardLayout1; });
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


var GoogleCardLayout1 = (function () {
    function GoogleCardLayout1() {
        this.slider = {};
    }
    GoogleCardLayout1.prototype.slideHasChanged = function (slider, index) {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            }
            else {
                this.data.splice(index, 1);
            }
        }
    };
    GoogleCardLayout1.prototype.onClickEvent = function (index) {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    };
    GoogleCardLayout1.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    GoogleCardLayout1.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (d) {
            _this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], GoogleCardLayout1.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */])
    ], GoogleCardLayout1.prototype, "fabButton", void 0);
    GoogleCardLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'google-card-layout-1',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/list-view/google-card/layout-1/google-card.html"*/'<!--Theme Styled cards-->\n\n<ion-content has-header>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <ion-row>\n\n            <ion-col col-12 col-md-12 col-lg-6 *ngFor="let item of data.items;let i = index">\n\n                <ion-card padding text-right class="card" (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n                    <div float-left class="card-img">\n\n                        <img images-filter src="{{item.image}}" />\n\n                    </div>\n\n                    <!--Card-content-->\n\n                    <ion-card-content>\n\n                        <ion-icon>\n\n                            <i class="icon {{item.iconSlider}}"></i>\n\n                        </ion-icon>\n\n                        <ion-card-title no-padding>\n\n                            <h2 card-title>{{item.title}}</h2>\n\n                        </ion-card-title>\n\n                        <h3 card-subtitle>{{item.description}}</h3>\n\n                        <h3 card-subtitle>{{item.shortDescription}}</h3>\n\n                        <p card-body-text>{{item.longDescription}}</p>\n\n                        <!---Social share-->\n\n                        <div social>\n\n                            <ion-icon>\n\n                                <i icon-small ng-if="group.iconLike" class="icon {{item.iconLike}}" (click)="onEvent(\'onLike\', item, $event)"></i>\n\n                            </ion-icon>\n\n                            <ion-icon>\n\n                                <i icon-small ng-if="item.iconFavorite" class="icon {{item.iconFavorite}}" (click)="onEvent(\'onFavorite\', item, $event)"></i>\n\n                            </ion-icon>\n\n                            <ion-icon>\n\n                                <i icon-small ng-if="item.iconShare" class="icon {{item.iconShare}}" (click)="onEvent(\'onShare\', item, $event)"></i>\n\n                            </ion-icon>\n\n                        </div>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n<!-- Fab Button -->\n\n<ion-fab #fab bottom right>\n\n    <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n\n      <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/list-view/google-card/layout-1/google-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GoogleCardLayout1);
    return GoogleCardLayout1;
}());

//# sourceMappingURL=google-card-layout-1.js.map

/***/ })

});
//# sourceMappingURL=57.js.map