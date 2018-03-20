webpackJsonp([7],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxLayout4Module", function() { return ParallaxLayout4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parallax_layout_4__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elastic_header_elastic_header_module__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ParallaxLayout4Module = (function () {
    function ParallaxLayout4Module() {
    }
    ParallaxLayout4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parallax_layout_4__["a" /* ParallaxLayout4 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__parallax_layout_4__["a" /* ParallaxLayout4 */]),
                __WEBPACK_IMPORTED_MODULE_3__elastic_header_elastic_header_module__["a" /* ElasticHeaderModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__parallax_layout_4__["a" /* ParallaxLayout4 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ParallaxLayout4Module);
    return ParallaxLayout4Module;
}());

//# sourceMappingURL=parallax-layout-4.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elastic_header__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ElasticHeaderModule = (function () {
    function ElasticHeaderModule() {
    }
    ElasticHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__elastic_header__["a" /* ElasticHeader */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__elastic_header__["a" /* ElasticHeader */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ElasticHeaderModule);
    return ElasticHeaderModule;
}());

//# sourceMappingURL=elastic-header.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeader; });
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

var ElasticHeader = (function () {
    function ElasticHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ElasticHeader.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollerHandle = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = this.scrollerHandle.firstElementChild;
        this.headerHeight = this.scrollerHandle.clientHeight;
        this.ticking = false;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        window.addEventListener('resize', function () {
            _this.headerHeight = _this.scrollerHandle.clientHeight;
        }, false);
        this.scrollerHandle.addEventListener('scroll', function () {
            if (!_this.ticking) {
                window.requestAnimationFrame(function () {
                    _this.updateElasticHeader();
                });
            }
            _this.ticking = true;
        });
    };
    ElasticHeader.prototype.updateElasticHeader = function () {
        this.scrollTop = this.scrollerHandle.scrollTop;
        if (this.scrollTop >= 0) {
            this.translateAmt = this.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
        this.ticking = false;
    };
    ElasticHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[elastic-header]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */]])
    ], ElasticHeader);
    return ElasticHeader;
}());

//# sourceMappingURL=elastic-header.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxLayout4; });
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


var ParallaxLayout4 = (function () {
    function ParallaxLayout4() {
    }
    ParallaxLayout4.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ParallaxLayout4.prototype.onStarClass = function (items, index, e) {
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates", index, e);
    };
    ;
    ParallaxLayout4.prototype.ngOnChanges = function (changes) {
        this.subscribeToIonScroll();
    };
    ParallaxLayout4.prototype.ngAfterViewInit = function () {
        this.subscribeToIonScroll();
    };
    ParallaxLayout4.prototype.subscribeToIonScroll = function () {
        var _this = this;
        if (this.content != null && this.content.ionScroll != null) {
            this.content.ionScroll.subscribe(function (d) {
                _this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ParallaxLayout4.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ParallaxLayout4.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ParallaxLayout4.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */])
    ], ParallaxLayout4.prototype, "fabButton", void 0);
    ParallaxLayout4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'parallax-layout-4',template:/*ion-inline-start:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/parallax/layout-4/parallax.html"*/'<!--- Theme Parallax Location Details -->\n\n<!--- Header Big Image-->\n\n<ion-content elastic-header has-header *ngIf="data != null">\n\n    <ion-item no-lines background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n\n    </ion-item>\n\n\n\n    <ion-grid no-padding>\n\n        <ion-row>\n\n            <!--Parallax Rateing-->\n\n            <ion-col col-12>\n\n                <ion-item no-lines header-bcg no-padding>\n\n                    <ion-icon text-center white *ngFor="let item of data.iconsStars;let i = index" (click)="onStarClass(data.iconsStars, i, $event)">\n\n                        <i icon-medium *ngIf="item.isActive" class="icon {{item.iconActive}}"></i>\n\n                        <i icon-medium *ngIf="!item.isActive" class="icon {{item.iconInactive}}"></i>\n\n                    </ion-icon>\n\n                    <div span-small text-center margin-bottom>{{data.reviews}}</div>\n\n                    <!--Parallax Title-->\n\n                    <h1 parallax-title text-center margin-top>{{data.title}}</h1>\n\n                    <!--- Social Share-->\n\n                    <div social text-right margin-top>\n\n                        <ion-icon icon-small white (click)="onEvent(\'onLike\', data)">\n\n                            <i class="icon {{data.iconLike}}"></i>\n\n                        </ion-icon>\n\n                        <ion-icon icon-small white (click)="onEvent(\'onFavorite\', data)">\n\n                            <i class="icon {{data.iconFavorite}}"></i>\n\n                        </ion-icon>\n\n                        <ion-icon icon-small white (click)="onEvent(\'onShare\', data)">\n\n                            <i class="icon {{data.iconShare}}"></i>\n\n                        </ion-icon>\n\n                    </div>\n\n                </ion-item>\n\n            </ion-col>\n\n            <!--Content-->\n\n            <ion-col col-12>\n\n                <!--Info-->\n\n                <ion-item no-lines no-margin padding-right>\n\n                    <div info *ngFor="let item of data.items;let i = index">\n\n                        <span float-left>{{item.name}}</span>\n\n                        <p>{{item.value}}</p>\n\n                    </div>\n\n                </ion-item>\n\n                <!-- Description-->\n\n                <ion-item no-lines text-wrap no-margin padding-right>\n\n                    <h3 parallax-description>{{data.description}}</h3>\n\n                    <h3 parallax-description>{{data.description3}}</h3>\n\n                    <h3 parallax-description>{{data.description2}}</h3>\n\n                    <h3 parallax-description>{{data.description4}}</h3>\n\n                </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n<!-- Fab Button -->\n\n<ion-fab #fab bottom right>\n\n    <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n'/*ion-inline-end:"/Users/piraan/Desktop/refuze-app/refuze-app/src/components/parallax/layout-4/parallax.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ParallaxLayout4);
    return ParallaxLayout4;
}());

//# sourceMappingURL=parallax-layout-4.js.map

/***/ })

});
//# sourceMappingURL=7.js.map