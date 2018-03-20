webpackJsonp([53],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeToDismissLayout2Module", function() { return SwipeToDismissLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_2__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwipeToDismissLayout2Module = (function () {
    function SwipeToDismissLayout2Module() {
    }
    SwipeToDismissLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_2__["a" /* SwipeToDismissLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_2__["a" /* SwipeToDismissLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_2__["a" /* SwipeToDismissLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SwipeToDismissLayout2Module);
    return SwipeToDismissLayout2Module;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-2.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout2; });
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


var SwipeToDismissLayout2 = (function () {
    function SwipeToDismissLayout2() {
        var _this = this;
        this.undo = function (slidingItem) {
            slidingItem.close();
        };
        this.delete = function (item) {
            var index = _this.data.items.indexOf(item);
            if (index > -1) {
                _this.data.items.splice(index, 1);
            }
        };
    }
    SwipeToDismissLayout2.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    SwipeToDismissLayout2.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (d) {
            _this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], SwipeToDismissLayout2.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */])
    ], SwipeToDismissLayout2.prototype, "fabButton", void 0);
    SwipeToDismissLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'swipe-to-dismiss-layout-2',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss.html"*/'<!-- Themes Swipe To Dismiss Products + CTA footer -->\n\n<ion-content has-header>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <ion-row>\n\n            <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n\n                <ion-list no-margin>\n\n                    <ion-item-sliding *ngFor="let item of data.items" #slidingItem>\n\n                        <ion-item no-lines no-padding no-margina (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n                            <ion-thumbnail no-margin item-start>\n\n                                <img src="{{item.image}}">\n\n                            </ion-thumbnail>\n\n                            <div item-top>\n\n                                <h2 item-title padding-left>{{item.title}}</h2>\n\n                            </div>\n\n\n\n                            <div item-bottom>\n\n                                <p item-subtitle padding-left text-wrap>{{item.description}}</p>\n\n                            </div>\n\n                            <item-content item-end>\n\n                              <span text-right old-price>{{item.oldPrice}}</span>\n\n                              <span span-medium text-right new-price>{{item.newPrice}}</span>\n\n                            </item-content>\n\n                        </ion-item>\n\n                        <ion-item-options no-lines>\n\n                            <button (click)="delete(item)" transparent>\n\n              <ion-icon icon-medium>\n\n                <i class="icon {{item.iconDelate}}"></i>\n\n              </ion-icon>\n\n            </button>\n\n                            <button (click)="undo(slidingItem)" transparent>\n\n                <ion-icon icon-medium>\n\n                  <i class="icon {{item.iconUndo}}"></i>\n\n                </ion-icon>\n\n            </button>\n\n                        </ion-item-options>\n\n                    </ion-item-sliding>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n<!-- Fab Button -->\n\n<ion-fab #fab bottom right>\n\n    <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SwipeToDismissLayout2);
    return SwipeToDismissLayout2;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-2.js.map

/***/ })

});
//# sourceMappingURL=53.js.map