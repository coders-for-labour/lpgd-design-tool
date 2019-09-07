webpackJsonp([1,5],{

/***/ 107:
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

/***/ 234:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 234;


/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(247);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(14);
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
        template: __webpack_require__(314),
        styles: [__webpack_require__(307)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_editor_svg_editor_component__ = __webpack_require__(246);
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
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__svg_editor_svg_editor_component__["a" /* SvgEditorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_data__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_save_svg_as_png__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_save_svg_as_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_save_svg_as_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_css__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
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
    function SvgEditorComponent(http) {
        this.http = http;
        this.fills = __WEBPACK_IMPORTED_MODULE_2__image_data__["a" /* FILLS */];
        this.urlRegex = /(?<=url\('?)(.*?)(?='?\))/g;
        this.formatRegex = /(?<=format\(')(.*?)(?='\))/g;
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
    SvgEditorComponent.prototype.getRemoteSrc = function (fontSrcString) {
        return fontSrcString.match(this.urlRegex)[0];
    };
    SvgEditorComponent.prototype.getFormat = function (fontSrcString) {
        return fontSrcString.match(this.formatRegex)[0];
    };
    SvgEditorComponent.prototype.getText = function (fontObj) {
        var family = fontObj.declarations.filter(function (x) { return x.property == "font-family"; })[0].value;
        var url = this.getRemoteSrc(fontObj.declarations.filter(function (x) { return x.property == "src"; })[0].value);
        //var format = this.getFormat(fontObj.declarations.filter(x => x.property == "src")[0].value);
        var style = fontObj.declarations.filter(function (x) { return x.property == "font-style"; })[0].value;
        var weight = fontObj.declarations.filter(function (x) { return x.property == "font-weight"; })[0].value;
        var display = fontObj.declarations.filter(function (x) { return x.property == "font-display"; })[0].value;
        var unicode = fontObj.declarations.filter(function (x) { return x.property == "unicode-range"; })[0].value;
        return "@font-face{        font-family: " + family + ";        src: url(" + url + ");        font-style: " + style + ";        font-weight: " + weight + ";        font-display: " + display + ";        unicode-range: " + unicode + ";      }";
    };
    SvgEditorComponent.prototype.getImports = function () {
        var urls = [];
        var ctx = this;
        __WEBPACK_IMPORTED_MODULE_1_jquery__(this.svgDoc.node).find("style").each(function (i, o) {
            var u = ctx.getRemoteSrc(__WEBPACK_IMPORTED_MODULE_1_jquery__(o).text().replace(/['"]/g, ''));
            urls.push(u);
        });
        return urls;
    };
    SvgEditorComponent.prototype.saveToPng = function () {
        var _this = this;
        this.getImports();
        var urls = this.getImports();
        var fonts = [];
        var reqs = [];
        urls.forEach(function (u) {
            reqs.push(_this.http.get(u, { responseType: 'text' }));
        });
        __WEBPACK_IMPORTED_MODULE_6_rxjs__["Observable"].forkJoin(reqs).subscribe({
            next: function (results) {
                results.forEach(function (r) {
                    var p = __WEBPACK_IMPORTED_MODULE_4_css___default.a.parse(r);
                    p.stylesheet.rules.filter(function (el) { return el.type == "font-face"; }).forEach(function (element) {
                        fonts.push({
                            text: _this.getText(element),
                            url: _this.getRemoteSrc(element.declarations.filter(function (x) { return x.property == "src"; })[0].value),
                            format: _this.getFormat(element.declarations.filter(function (x) { return x.property == "src"; })[0].value)
                        });
                    });
                });
            },
            complete: function () {
                __WEBPACK_IMPORTED_MODULE_3_save_svg_as_png__["saveSvgAsPng"](document.getElementById(_this.svgDoc), "image.png", { scale: 0.5, fonts: fonts });
            }
        });
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
        template: __webpack_require__(315),
        styles: [__webpack_require__(308)]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], SvgEditorComponent);

var _a;
//# sourceMappingURL=svg-editor.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, "#svg-editor {\n  padding: 1em;\n  border: solid 1px lightslategray;\n  display: inline-block;\n  margin-left: auto;\n  margin-right: auto;\n  width: auto; }\n\n#canvas {\n  width: 512px;\n  height: 256px; }\n\n#svg-image-view {\n  display: inline-block; }\n\n#svg-tools-view {\n  display: inline-block; }\n\n.svg-image-section {\n  padding: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  {{title}}\r\n</h1>\r\n<app-svg-editor svgUrl='assets/svg/LPGD_white.svg'></app-svg-editor>\r\n"

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "<div id=\"svg-editor\">\r\n  <div id=\"svg-image-view\">\r\n    <div id=\"canvas\"></div>\r\n  </div>\r\n  <div id=\"svg-tools-view\">\r\n    <div *ngFor=\"let img of image.sections\" class=\"svg-image-section\">\r\n      <label for=\"{{ img.id }}\">{{ img.id }}</label>\r\n      <select id=\"{{ img.id }}\" (ngModelChange)=\"setFill(img, $event)\" [(ngModel)]=\"img.value\">\r\n        <option *ngFor=\"let f of fills\" ng-selected=\"img.value == f\" value=\"{{f}}\">{{ f }}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"svg-image-save\">\r\n      <button (click)=\"saveToPng()\">Save To PNG</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(235);


/***/ })

},[617]);
//# sourceMappingURL=main.bundle.js.map