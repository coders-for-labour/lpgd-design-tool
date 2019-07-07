webpackJsonp([1,5],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(false);
// imports


// module
exports.push([module.i, "#svg-editor{\r\n  padding: 1em;\r\n  border: solid 1px lightslategray;\r\n  display: inline-block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: auto;\r\n}\r\n\r\n#canvas{\r\n  width: 512px;\r\n  height: 256px;\r\n}\r\n\r\n#svg-image-view\r\n{\r\n  display: inline-block;\r\n}\r\n\r\n#svg-tools-view{\r\n  display: inline-block;\r\n}\r\n\r\n.svg-image-section{\r\n  padding: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<app-svg-editor svgUrl='assets/svg/lpgd_logo.svg'></app-svg-editor>\n"

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = "<div id=\"svg-editor\">\n  <div id=\"svg-image-view\">\n    <div id=\"canvas\"></div>\n  </div>\n  <div id=\"svg-tools-view\">\n    <div *ngFor=\"let img of image.sections\" class=\"svg-image-section\">\n      <label for=\"{{ img.id }}\">{{ img.id }}</label>\n      <select id=\"{{ img.id }}\" (ngModelChange)=\"setFill(img, $event)\" [(ngModel)]=\"img.value\">\n        <option *ngFor=\"let f of fills\" ng-selected=\"img.value == f\" value=\"{{f}}\">{{ f }}</option>\n      </select>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(80);


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FILLS; });
var IMAGES = [
    {
        name: "logo", url: "assets/svg/lpgd_logo.svg", sections: [
            { id: "border", option: "fill", value: "red" },
            { id: "L", option: "fill", value: "red" },
            { id: "P", option: "fill", value: "green" },
            { id: "G", option: "fill", value: "blue" },
            { id: "D", option: "fill", value: "yellow" }
        ]
    }
];
var FILLS = [
    "red", "green", "blue", "yellow"
];
//# sourceMappingURL=image-data.js.map

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 79;


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(92);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Design Tool';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(151),
        styles: [__webpack_require__(146)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_editor_svg_editor_component__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__svg_editor_svg_editor_component__["a" /* SvgEditorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_data__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SvgEditorComponent = (function () {
    function SvgEditorComponent() {
        this.fills = __WEBPACK_IMPORTED_MODULE_2__image_data__["a" /* FILLS */];
    }
    SvgEditorComponent.prototype.ngOnInit = function () {
        if (this.isKnownImage(this.svgUrl)) {
            this.image = this.getImage(this.svgUrl);
            var draw_1 = SVG("canvas");
            var ctx = this;
            __WEBPACK_IMPORTED_MODULE_1_jquery__["get"](this.svgUrl, function (contents) {
                var $tmp = __WEBPACK_IMPORTED_MODULE_1_jquery__("svg", contents);
                var i = draw_1.svg($tmp.html());
                //Ran into some scaling problems - SVGs should omit width / height and provide only viewBox
                i.viewbox($tmp.attr("viewBox"));
                ctx.setDefaults();
            }, "xml");
        }
        else {
            console.log("Unknown image: " + this.svgUrl);
        }
        console.log(this.svgUrl);
    };
    SvgEditorComponent.prototype.setDefaults = function () {
        for (var i = 0; i < this.image.sections.length; i++) {
            this.setFill(this.image.sections[i], this.image.sections[i].value);
        }
    };
    SvgEditorComponent.prototype.isKnownImage = function (imageURL) {
        return __WEBPACK_IMPORTED_MODULE_2__image_data__["b" /* IMAGES */].find(function (img) {
            return img.url === imageURL;
        });
    };
    SvgEditorComponent.prototype.getImage = function (imageURL) {
        return __WEBPACK_IMPORTED_MODULE_2__image_data__["b" /* IMAGES */].filter(function (img) {
            return img.url === imageURL;
        })[0];
    };
    SvgEditorComponent.prototype.setFill = function (section, colour) {
        if (this.image.sections.find(function (s) {
            return s.id == section.id;
        })) {
            section.value = colour;
            SVG.get(section.id).fill(section.value);
            this.image.sections.filter(function (s) {
                return s.id == section.id;
            })[0].value = section.value;
        }
    };
    return SvgEditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], SvgEditorComponent.prototype, "svgUrl", void 0);
SvgEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-svg-editor',
        template: __webpack_require__(152),
        styles: [__webpack_require__(147)]
    }),
    __metadata("design:paramtypes", [])
], SvgEditorComponent);

//# sourceMappingURL=svg-editor.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ })

},[182]);
//# sourceMappingURL=main.bundle.js.map