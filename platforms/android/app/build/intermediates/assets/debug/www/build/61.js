webpackJsonp([61],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropLayout3Module", function() { return DragAndDropLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_3__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DragAndDropLayout3Module = (function () {
    function DragAndDropLayout3Module() {
    }
    DragAndDropLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_3__["a" /* DragAndDropLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_3__["a" /* DragAndDropLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_3__["a" /* DragAndDropLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], DragAndDropLayout3Module);
    return DragAndDropLayout3Module;
}());

//# sourceMappingURL=drag-and-drop-layout-3.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropLayout3; });
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


var DragAndDropLayout3 = (function () {
    function DragAndDropLayout3() {
        var _this = this;
        this.reorderItems = function (indexes) {
            _this.data.items = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* reorderArray */])(_this.data.items, indexes);
        };
    }
    DragAndDropLayout3.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    DragAndDropLayout3.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (d) {
            _this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], DragAndDropLayout3.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */])
    ], DragAndDropLayout3.prototype, "fabButton", void 0);
    DragAndDropLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'drag-and-drop-layout-3',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/list-view/drag-and-drop/layout-3/drag-and-drop.html"*/'<!-- Themes Medium item with avatar-->\n\n<ion-content has-header>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <!--Content-->\n\n        <ion-row>\n\n            <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n\n                <ion-list no-margin no-lines reorder="true" (ionItemReorder)="reorderItems($event)">\n\n                    <ion-item *ngFor="let item of data.items; let i = index;" (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n                        <ion-avatar item-start>\n\n                            <img src="{{item.image}}">\n\n                        </ion-avatar>\n\n                        <h2 item-title>{{item.title}}</h2>\n\n                        <h3 item-subtitle>{{item.description}}</h3>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n<!-- Fab Button -->\n\n<ion-fab #fab bottom right>\n\n    <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/list-view/drag-and-drop/layout-3/drag-and-drop.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DragAndDropLayout3);
    return DragAndDropLayout3;
}());

//# sourceMappingURL=drag-and-drop-layout-3.js.map

/***/ })

});
//# sourceMappingURL=61.js.map