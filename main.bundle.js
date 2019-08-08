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
exports.push([module.i, "#svg-editor {\n  padding: 1em;\n  border: solid 1px lightslategray;\n  display: inline-block;\n  margin-left: auto;\n  margin-right: auto;\n  width: auto; }\n\n#canvas {\n  width: 512px;\n  height: 256px; }\n\n#svg-image-view {\n  display: inline-block; }\n\n#svg-tools-view {\n  display: inline-block; }\n\n.svg-image-section {\n  padding: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  {{title}}\r\n</h1>\r\n<app-svg-editor svgUrl='assets/svg/LPGD_white.svg'></app-svg-editor>\r\n"

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = "<div id=\"svg-editor\">\r\n  <div id=\"svg-image-view\">\r\n    <div id=\"canvas\"></div>\r\n  </div>\r\n  <div id=\"svg-tools-view\">\r\n    <div *ngFor=\"let img of image.sections\" class=\"svg-image-section\">\r\n      <label for=\"{{ img.id }}\">{{ img.id }}</label>\r\n      <select id=\"{{ img.id }}\" (ngModelChange)=\"setFill(img, $event)\" [(ngModel)]=\"img.value\">\r\n        <option *ngFor=\"let f of fills\" ng-selected=\"img.value == f\" value=\"{{f}}\">{{ f }}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"svg-image-save\">\r\n      <button (click)=\"saveToPng()\">Save To PNG</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 183:
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
    },
    {
        name: "lpgd red", url: "assets/svg/LPGD_red.svg", sections: [
            { id: "background", option: "fill", value: "red" },
            { id: "text", option: "fill", value: "white" },
            { id: "logo", option: "fill", value: "white" }
        ]
    },
    {
        name: "lpgd white", url: "assets/svg/LPGD_white.svg", sections: [
            { id: "background", option: "fill", value: "white" },
            { id: "text", option: "fill", value: "red" },
            { id: "logo", option: "fill", value: "red" }
        ]
    }
];
var FILLS = [
    "red", "green", "blue", "yellow", "white"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_save_svg_as_png__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_save_svg_as_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_save_svg_as_png__);
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
            this.svgDoc = SVG("canvas");
            var ctx = this;
            __WEBPACK_IMPORTED_MODULE_1_jquery__["get"](this.svgUrl, function (contents) {
                var $tmp = __WEBPACK_IMPORTED_MODULE_1_jquery__("svg", contents);
                var i = ctx.svgDoc.svg($tmp.html());
                //Ran into some scaling problems - SVGs should omit width / height and provide only viewBox
                i.viewbox(ctx.getDimensions($tmp));
                ctx.svgDoc = i;
                ctx.setDefaults();
            }, "xml");
        }
        else {
            console.log("Unknown image: " + this.svgUrl);
        }
        console.log(this.svgUrl);
    };
    SvgEditorComponent.prototype.getDimensions = function (loadedDoc) {
        if (loadedDoc.attr("viewBox")) {
            return loadedDoc.attr("viewBox");
        }
        else {
            return {
                x: 0, y: 0, width: loadedDoc.attr("width"), height: loadedDoc.attr("height")
            };
        }
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
    SvgEditorComponent.prototype.saveToPng = function () {
        __WEBPACK_IMPORTED_MODULE_3_save_svg_as_png__["saveSvgAsPng"](document.getElementById(this.svgDoc), "image.png", { scale: 0.5 });
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

},[183]);
//# sourceMappingURL=main.bundle.js.map