webpackJsonp([54],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeToDismissLayout1Module", function() { return SwipeToDismissLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwipeToDismissLayout1Module = (function () {
    function SwipeToDismissLayout1Module() {
    }
    SwipeToDismissLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__["a" /* SwipeToDismissLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__["a" /* SwipeToDismissLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__["a" /* SwipeToDismissLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SwipeToDismissLayout1Module);
    return SwipeToDismissLayout1Module;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-1.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout1; });
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


var SwipeToDismissLayout1 = (function () {
    function SwipeToDismissLayout1() {
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
    SwipeToDismissLayout1.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    SwipeToDismissLayout1.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (d) {
            _this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], SwipeToDismissLayout1.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */])
    ], SwipeToDismissLayout1.prototype, "fabButton", void 0);
    SwipeToDismissLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'swipe-to-dismiss-layout-1',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss.html"*/'<!--Theme Small item + header-->\n\n<ion-content has-header>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list no-margin>\n\n          <ion-list-header header-bcg no-padding no-lines>\n\n            <ion-icon white icon-large item-start>\n\n              <i class="icon {{data.iconPlay}}"></i>\n\n            </ion-icon>\n\n            <h1 header-title>{{data.title}}</h1>\n\n            <h2 header-subtitle>{{data.description}}</h2>\n\n            <span span-medium>{{data.shortDescription}}</span>\n\n            <div float-right social>\n\n              <ion-icon>\n\n                <i icon-small class="icon icon-thumb-up" (click)="onEvent(\'onLike\', item, $event)"></i>\n\n              </ion-icon>\n\n              <ion-icon>\n\n                <i icon-small class="icon icon-heart" (click)="onEvent(\'onFavorite\', item, $event)"></i>\n\n              </ion-icon>\n\n              <ion-icon>\n\n                <i icon-small class="icon icon-share-variant" (click)="onEvent(\'onShare\', item, $event)"></i>\n\n              </ion-icon>\n\n            </div>\n\n          </ion-list-header>\n\n          <!--Swipe To Dismiss -->\n\n          <ion-item-sliding *ngFor="let item of data.items" #slidingItem>\n\n            <ion-item no-lines (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n              <ion-avatar item-start icon-right>\n\n                <img src="{{item.image}}">\n\n              </ion-avatar>\n\n              <h2 item-title>{{item.title}}</h2>\n\n              <h3 item-subtitle>{{item.description}}</h3>\n\n              <span item-end span-small>{{item.shortDescription}}</span>\n\n              <ion-icon icon-medium item-end>\n\n                <i class="icon icon-play"></i>\n\n              </ion-icon>\n\n            </ion-item>\n\n            <ion-item-options no-lines>\n\n              <button (click)="delete(item)" transparent>\n\n                  <ion-icon icon-medium>\n\n                    <i class="icon {{item.iconDelate}}"></i>\n\n                  </ion-icon>\n\n              </button>\n\n              <button (click)="undo(slidingItem)" transparent>\n\n                  <ion-icon icon-medium>\n\n                    <i class="icon {{item.iconUndo}}"></i>\n\n                  </ion-icon>\n\n              </button>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<!-- Fab Button -->\n\n<ion-fab #fab bottom right>\n\n  <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', item, $event)">\n\n<ion-icon name="add"></ion-icon>\n\n</button>\n\n</ion-fab>\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SwipeToDismissLayout1);
    return SwipeToDismissLayout1;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-1.js.map

/***/ })

});
//# sourceMappingURL=54.js.map