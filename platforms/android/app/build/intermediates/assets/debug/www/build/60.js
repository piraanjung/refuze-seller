webpackJsonp([60],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableLayout1Module", function() { return ExpandableLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expandable_layout_1__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExpandableLayout1Module = (function () {
    function ExpandableLayout1Module() {
    }
    ExpandableLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__expandable_layout_1__["a" /* ExpandableLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expandable_layout_1__["a" /* ExpandableLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__expandable_layout_1__["a" /* ExpandableLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ExpandableLayout1Module);
    return ExpandableLayout1Module;
}());

//# sourceMappingURL=expandable-layout-1.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableLayout1; });
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


var ExpandableLayout1 = (function () {
    function ExpandableLayout1() {
    }
    ExpandableLayout1.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ExpandableLayout1.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    ExpandableLayout1.prototype.isGroupShown = function (group) {
        return group.show;
    };
    ExpandableLayout1.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (d) {
            _this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ExpandableLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ExpandableLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ExpandableLayout1.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */])
    ], ExpandableLayout1.prototype, "fabButton", void 0);
    ExpandableLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'expandable-layout-1',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/list-view/expandable/layout-1/expandable.html"*/'<!-- Theme List big image -->\n\n<ion-content has-header>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <ion-list no-margin>\n\n                    <ul no-margin no-padding class="collapsible">\n\n                        <li *ngFor="let group of data.items">\n\n                            <!-- List big image Header -->\n\n                            <div class="collapsible-header" (click)="toggleGroup(group)">\n\n                                <ion-item no-padding no-lines>\n\n                                    <ion-thumbnail item-start no-margin>\n\n                                        <img [src]="group.image" alt="{{group.title}}" />\n\n                                    </ion-thumbnail>\n\n                                    <div title-block>\n\n                                        <h2 padding-left item-title>{{group.title}}</h2>\n\n                                        <h3 padding-left item-subtitle>{{group.description}}</h3>\n\n                                    </div>\n\n                                    <div social>\n\n                                        <ion-icon>\n\n                                            <i ng-if="group.iconLike" class="icon {{group.iconLike}}" (click)="onEvent(\'onLike\', group, $event)"></i>\n\n                                        </ion-icon>\n\n                                        <ion-icon>\n\n                                            <i ng-if="group.iconFavorite" class="icon {{group.iconFavorite}}" (click)="onEvent(\'onFavorite\', group, $event)"></i>\n\n                                        </ion-icon>\n\n                                        <ion-icon>\n\n                                            <i ng-if="group.iconShare" class="icon {{group.iconShare}}" (click)="onEvent(\'onShare\', group, $event)"></i>\n\n                                        </ion-icon>\n\n                                    </div>\n\n                                </ion-item>\n\n                            </div>\n\n                            <!-- List big image Body -->\n\n                            <div class="item-accordion" [ngClass]="{\'active\': isGroupShown(group) }" [hidden]="!isGroupShown(group)">\n\n                                <ion-item transparent no-lines *ngFor="let item of group.items;" (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n                                    <ion-thumbnail item-left>\n\n                                        <img [src]="item.image" alt="{{item.title}}" />\n\n                                    </ion-thumbnail>\n\n                                    <h2 subitem-title>{{item.title}}</h2>\n\n                                    <h3 subitem-subtitle>{{item.description}}</h3>\n\n                                    <ion-icon white item-right><i class="icon {{item.iconPlay}}"></i></ion-icon>\n\n                                </ion-item>\n\n                            </div>\n\n                            <!--end-->\n\n                        </li>\n\n                    </ul>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n<!-- Fab Button -->\n\n<ion-fab #fab bottom right>\n\n    <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', group, $event)">\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/list-view/expandable/layout-1/expandable.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ExpandableLayout1);
    return ExpandableLayout1;
}());

//# sourceMappingURL=expandable-layout-1.js.map

/***/ })

});
//# sourceMappingURL=60.js.map