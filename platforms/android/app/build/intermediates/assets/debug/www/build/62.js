webpackJsonp([62],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropLayout2Module", function() { return DragAndDropLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_2__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DragAndDropLayout2Module = (function () {
    function DragAndDropLayout2Module() {
    }
    DragAndDropLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_2__["a" /* DragAndDropLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_2__["a" /* DragAndDropLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_2__["a" /* DragAndDropLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], DragAndDropLayout2Module);
    return DragAndDropLayout2Module;
}());

//# sourceMappingURL=drag-and-drop-layout-2.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropLayout2; });
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


var DragAndDropLayout2 = (function () {
    function DragAndDropLayout2() {
        var _this = this;
        this.reorderItems = function (indexes) {
            _this.data.items = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* reorderArray */])(_this.data.items, indexes);
        };
    }
    DragAndDropLayout2.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    DragAndDropLayout2.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (d) {
            _this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], DragAndDropLayout2.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */])
    ], DragAndDropLayout2.prototype, "fabButton", void 0);
    DragAndDropLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'drag-and-drop-layout-2',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/list-view/drag-and-drop/layout-2/drag-and-drop.html"*/'<!-- Themes Products + CTA header -->\n\n<ion-content has-header>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <ion-row padding background-size container-hearder-image [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}" *ngIf="data.headerImage != null">\n\n            <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-left>\n\n                <h1 header-title>{{data.title}}</h1>\n\n                <h2 header-subtitle>{{data.description}}</h2>\n\n            </ion-col>\n\n            <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-right>\n\n                <span span-large>{{data.price}}</span>\n\n                <button ion-button button-clear-outline round outline (click)="onEvent(\'onProceed\', data, $event)">\n\n            {{data.buttonText}}\n\n          </button>\n\n            </ion-col>\n\n        </ion-row>\n\n        <!--Content-->\n\n        <ion-row no-padding>\n\n            <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n\n                <ion-list no-margin reorder="true" (ionItemReorder)="reorderItems($event)">\n\n                    <ion-item no-padding no-lines *ngFor="let item of data.items; let i = index;" (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n                        <ion-thumbnail item-start no-margin>\n\n                            <img src="{{item.image}}">\n\n                        </ion-thumbnail>\n\n                        <div item-top>\n\n                            <h2 item-title padding-left text-wrap>{{item.title}}</h2>\n\n                            <h3 item-subtitle padding-left text-wrap>{{item.shipping}}</h3>\n\n                        </div>\n\n                        <div item-bottom>\n\n                            <div span-small text-right>{{item.oldPrice}}</div>\n\n                            <div span-medium right text-right>{{item.newPrice}}</div>\n\n                            <!-- Products + CTA header Seller And Shipping-->\n\n                            <h3 item-subtitle float-left padding-left>{{item.seller}}</h3>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n<!-- Fab Button -->\n\n<ion-fab #fab bottom right>\n\n    <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n\n  <ion-icon name="add"></ion-icon>\n\n</button>\n\n</ion-fab>\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/list-view/drag-and-drop/layout-2/drag-and-drop.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DragAndDropLayout2);
    return DragAndDropLayout2;
}());

//# sourceMappingURL=drag-and-drop-layout-2.js.map

/***/ })

});
//# sourceMappingURL=62.js.map