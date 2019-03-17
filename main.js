(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/interests/interests.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");








var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'education', component: _education_education_component__WEBPACK_IMPORTED_MODULE_3__["EducationComponent"] },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"] },
    { path: 'interests', component: _interests_interests_component__WEBPACK_IMPORTED_MODULE_5__["InterestsComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n\n<!--<div class=\"parent\">-->\n<!--<img class=\"image1\" src=\"./assets/iPhoneX.png\">-->\n<!--<img class=\"image2\" src=\"./assets/Logo%20White@2x.png\">-->\n\n<!--<p id=\"aDream\">A dream to revolutionise the way the-->\n<!--education sector recruits.-->\n<!--We are the agency alternative.</p>-->\n\n<!--<button class=\"btn btn-success\" id=\"signUpNow\" type=\"button\">Sign Up Now</button>-->\n\n<!--<img class=\"image11\" src=\"./assets/iosBlue.png\">-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Andrew';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/interests/interests.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"],
                _interests_interests_component__WEBPACK_IMPORTED_MODULE_7__["InterestsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _background_background_component__WEBPACK_IMPORTED_MODULE_11__["BackgroundComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
                // HttpModule
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/background/background.component.css":
/*!*****************************************************!*\
  !*** ./src/app/background/background.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*body {*/\n/*margin: 0;*/\n/*}*/\n/*.app {*/\n/*height: 100vh; !* 100% of the device's current height *!*/\n/*width: 100vw; !* 100% of the device's current width *!*/\n/*background: url('/assets/background2.jpg');*/\n/*background-position: center;*/\n/*background-size: cover; !* Scales the image down window gets smaller *!*/\n/*margin: 0;*/\n/*overflow: hidden;*/\n/*opacity: 0.8;*/\n/*}*/\n/*body {*/\n/*background-image: url(\"/src/assets/background2.jpg\");*/\n/*}*/\n/*.wp-caption {*/\n/*position: relative;*/\n/*padding: 0;*/\n/*margin: 0;*/\n/*}*/\n/*.wp-caption img {*/\n/*display: block;*/\n/*max-width: 100%;*/\n/*height: auto;*/\n/*}*/\n/*.wp-caption:after {*/\n/*content: \"\";*/\n/*position: absolute;*/\n/*display: block;*/\n/*left: 0;*/\n/*top: 0;*/\n/*width: 100%;*/\n/*height: 100%;*/\n/*background: rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(45, 45, 45, 0.6) 250%) repeat 0 0;*/\n/*z-index: 1;*/\n/*}*/\n/*.wp-caption-text {*/\n/*display: block;*/\n/*position: relative;*/\n/*width: 60%;*/\n/*color: #fff;*/\n/*left: 4em;*/\n/*padding: 1.5em;*/\n/*z-index: 2;*/\n/*top: 20em;*/\n/*!*bottom: 15em;*!*/\n/*!*font-size: 17px;*!*/\n/*!*font-weight: 1300;*!*/\n/*!*font-size: 100%;*!*/\n/*font-family: courier;*/\n/*-webkit-box-sizing: border-box;*/\n/*box-sizing: border-box;*/\n/*}*/\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTtBQUNWLGNBQWM7QUFDZCxLQUFLO0FBRUwsVUFBVTtBQUNWLDREQUE0RDtBQUM1RCwwREFBMEQ7QUFDMUQsK0NBQStDO0FBQy9DLGdDQUFnQztBQUNoQywyRUFBMkU7QUFDM0UsY0FBYztBQUNkLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsS0FBSztBQUVMLFVBQVU7QUFDVix5REFBeUQ7QUFDekQsS0FBSztBQUVMLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLGNBQWM7QUFDZCxLQUFLO0FBRUwscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQixvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCLEtBQUs7QUFFTCx1QkFBdUI7QUFDdkIsZ0JBQWdCO0FBQ2hCLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLHlIQUF5SDtBQUN6SCxlQUFlO0FBQ2YsS0FBSztBQUVMLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2YsY0FBYztBQUNkLHFCQUFxQjtBQUNyQix3QkFBd0I7QUFDeEIsMEJBQTBCO0FBQzFCLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIsbUNBQW1DO0FBQ25DLDJCQUEyQjtBQUMzQixLQUFLIiwiZmlsZSI6InNyYy9hcHAvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmJvZHkgeyovXG4vKm1hcmdpbjogMDsqL1xuLyp9Ki9cblxuLyouYXBwIHsqL1xuLypoZWlnaHQ6IDEwMHZoOyAhKiAxMDAlIG9mIHRoZSBkZXZpY2UncyBjdXJyZW50IGhlaWdodCAqISovXG4vKndpZHRoOiAxMDB2dzsgISogMTAwJSBvZiB0aGUgZGV2aWNlJ3MgY3VycmVudCB3aWR0aCAqISovXG4vKmJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9iYWNrZ3JvdW5kMi5qcGcnKTsqL1xuLypiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7Ki9cbi8qYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgISogU2NhbGVzIHRoZSBpbWFnZSBkb3duIHdpbmRvdyBnZXRzIHNtYWxsZXIgKiEqL1xuLyptYXJnaW46IDA7Ki9cbi8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xuLypvcGFjaXR5OiAwLjg7Ki9cbi8qfSovXG5cbi8qYm9keSB7Ki9cbi8qYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3NyYy9hc3NldHMvYmFja2dyb3VuZDIuanBnXCIpOyovXG4vKn0qL1xuXG4vKi53cC1jYXB0aW9uIHsqL1xuLypwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbi8qcGFkZGluZzogMDsqL1xuLyptYXJnaW46IDA7Ki9cbi8qfSovXG5cbi8qLndwLWNhcHRpb24gaW1nIHsqL1xuLypkaXNwbGF5OiBibG9jazsqL1xuLyptYXgtd2lkdGg6IDEwMCU7Ki9cbi8qaGVpZ2h0OiBhdXRvOyovXG4vKn0qL1xuXG4vKi53cC1jYXB0aW9uOmFmdGVyIHsqL1xuLypjb250ZW50OiBcIlwiOyovXG4vKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuLypkaXNwbGF5OiBibG9jazsqL1xuLypsZWZ0OiAwOyovXG4vKnRvcDogMDsqL1xuLyp3aWR0aDogMTAwJTsqL1xuLypoZWlnaHQ6IDEwMCU7Ki9cbi8qYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApIDBweCwgcmdiYSg0NSwgNDUsIDQ1LCAwLjYpIDI1MCUpIHJlcGVhdCAwIDA7Ki9cbi8qei1pbmRleDogMTsqL1xuLyp9Ki9cblxuLyoud3AtY2FwdGlvbi10ZXh0IHsqL1xuLypkaXNwbGF5OiBibG9jazsqL1xuLypwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbi8qd2lkdGg6IDYwJTsqL1xuLypjb2xvcjogI2ZmZjsqL1xuLypsZWZ0OiA0ZW07Ki9cbi8qcGFkZGluZzogMS41ZW07Ki9cbi8qei1pbmRleDogMjsqL1xuLyp0b3A6IDIwZW07Ki9cbi8qISpib3R0b206IDE1ZW07KiEqL1xuLyohKmZvbnQtc2l6ZTogMTdweDsqISovXG4vKiEqZm9udC13ZWlnaHQ6IDEzMDA7KiEqL1xuLyohKmZvbnQtc2l6ZTogMTAwJTsqISovXG4vKmZvbnQtZmFtaWx5OiBjb3VyaWVyOyovXG4vKi13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsqL1xuLypib3gtc2l6aW5nOiBib3JkZXItYm94OyovXG4vKn0qL1xuXG4iXX0= */"

/***/ }),

/***/ "./src/app/background/background.component.html":
/*!******************************************************!*\
  !*** ./src/app/background/background.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<img class=\"background\" src=\"./assets/background2.jpg\">-->\n<!--<figure class=\"wp-caption\">-->\n<!--<div class=\"app\">-->\n<!--<figcaption class=\"wp-caption-text\">Hello!<br>-->\n<!--My name is Andrew Peliza and currently living in Manchester. <br>-->\n<!--Recently finished my degree in Computing.<br>-->\n<!--Actively searching for a role in Web Development. <br>-->\n<!--Ready to begin my journey becoming a successful developer.<br>-->\n<!--&lt;!&ndash;I have a diverse set of skills ranging from;<br> Design, to HTML5, CSS, JavaScript (Express, Node.js, Angular.js, Vue.js, TypeScript), PHP, SQL, jQuery and basic knowledge of other languages...&ndash;&gt;-->\n<!--</figcaption>-->\n<!--<div class=\"header\">-->\n<!--</div>-->\n<!--<div class=\"body\"></div>-->\n<!--</div>-->\n<!--</figure>-->\n"

/***/ }),

/***/ "./src/app/background/background.component.ts":
/*!****************************************************!*\
  !*** ./src/app/background/background.component.ts ***!
  \****************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
    }
    BackgroundComponent.prototype.ngOnInit = function () {
    };
    BackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-background',
            template: __webpack_require__(/*! ./background.component.html */ "./src/app/background/background.component.html"),
            styles: [__webpack_require__(/*! ./background.component.css */ "./src/app/background/background.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackgroundComponent);
    return BackgroundComponent;
}());



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  display: block;\n}\n\nh4 {\n  font-weight: 700;\n  text-align: center;\n  letter-spacing: 1px;\n  text-shadow: 0.5rem 0.4rem 2rem rgba(0, 0, 0, 0.3);\n  transition: all 1s;\n}\n\nh4:focus,\nh4:hover {\n  outline: none;\n  -webkit-transform: scale(1.4) skewX(15deg);\n          transform: scale(1.4) skewX(15deg);\n  text-shadow: 0.5rem 0.4rem 2rem rgba(0, 0, 0, 0.8);\n  /* animation: twist .8s ease-out; */\n}\n\n.card-title {\n  text-align: center;\n  font-weight: bold;\n}\n\n.card-title__animation {\n  text-shadow: 0.5rem 0.4rem 2rem rgba(0, 0, 0, 0.3);\n  transition: all 1s;\n}\n\n.card-title__animation:focus,\n.card-title__animation:hover {\n  -webkit-transform: scale(1.2) skewX(15deg);\n          transform: scale(1.2) skewX(15deg);\n  text-shadow: 0.5rem 0.4rem 2rem rgba(0, 0, 0, 0.8);\n}\n\n.card-text {\n  text-align: center;\n  font-style: italic;\n}\n\n.uniTitle {\n  padding-top: 2.5em;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.btn {\n  transition: all 0.2s;\n}\n\n.btn-animation:focus,\n.btn-animation:hover {\n  outline: none;\n  -webkit-animation: pulsate 1s infinite;\n          animation: pulsate 1s infinite;\n}\n\n#btnCal {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  font-family: courier;\n  color: white;\n}\n\n#btnPro {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  font-family: courier;\n  color: white;\n}\n\n#btnRest {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  font-family: courier;\n  color: white;\n}\n\n#btnSnake {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  font-family: courier;\n  color: white;\n}\n\n#webSite {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  font-family: courier;\n  color: white;\n}\n\n@-webkit-keyframes pulsate {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n\n  50% {\n    -webkit-transform: scale(1.10);\n            transform: scale(1.10);\n    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n}\n\n@keyframes pulsate {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n\n  50% {\n    -webkit-transform: scale(1.10);\n            transform: scale(1.10);\n    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n}\n\n@-webkit-keyframes twist {\n  0% {\n    -webkit-transform: scale(1) skewY(2deg);\n            transform: scale(1) skewY(2deg);\n    box-shadow: none;\n  }\n\n  50% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    text-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.4);\n  }\n\n  100% {\n    -webkit-transform: skewX(15deg);\n            transform: skewX(15deg);\n    text-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.8);\n  }\n}\n\n@keyframes twist {\n  0% {\n    -webkit-transform: scale(1) skewY(2deg);\n            transform: scale(1) skewY(2deg);\n    box-shadow: none;\n  }\n\n  50% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    text-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.4);\n  }\n\n  100% {\n    -webkit-transform: skewX(15deg);\n            transform: skewX(15deg);\n    text-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.8);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixtREFBbUQ7RUFDbkQsbUJBQW1CO0NBQ3BCOztBQUVEOztFQUVFLGNBQWM7RUFDZCwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLG1EQUFtRDtFQUNuRCxvQ0FBb0M7Q0FDckM7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsbURBQW1EO0VBQ25ELG1CQUFtQjtDQUNwQjs7QUFFRDs7RUFFRSwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLG1EQUFtRDtDQUNwRDs7QUFHRDtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLHFCQUFxQjtDQUN0Qjs7QUFFRDs7RUFFRSxjQUFjO0VBQ2QsdUNBQStCO1VBQS9CLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLDhFQUE4RTtFQUM5RSxxQkFBcUI7RUFDckIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsOEVBQThFO0VBQzlFLHFCQUFxQjtFQUNyQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSw4RUFBOEU7RUFDOUUscUJBQXFCO0VBQ3JCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLDhFQUE4RTtFQUM5RSxxQkFBcUI7RUFDckIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsOEVBQThFO0VBQzlFLHFCQUFxQjtFQUNyQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw0Q0FBNEM7R0FDN0M7O0VBRUQ7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtHQUNsQjtDQUNGOztBQWZEO0VBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsNENBQTRDO0dBQzdDOztFQUVEO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixpQkFBaUI7R0FDbEI7Q0FDRjs7QUFFRDtFQUNFO0lBQ0Usd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDRDQUE0QztHQUM3Qzs7RUFFRDtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsNENBQTRDO0dBQzdDO0NBQ0Y7O0FBZkQ7RUFDRTtJQUNFLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qiw0Q0FBNEM7R0FDN0M7O0VBRUQ7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLDRDQUE0QztHQUM3QztDQUNGIiwiZmlsZSI6InNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmg0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXNoYWRvdzogMC41cmVtIDAuNHJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xufVxuXG5oNDpmb2N1cyxcbmg0OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpIHNrZXdYKDE1ZGVnKTtcbiAgdGV4dC1zaGFkb3c6IDAuNXJlbSAwLjRyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIC8qIGFuaW1hdGlvbjogdHdpc3QgLjhzIGVhc2Utb3V0OyAqL1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkLXRpdGxlX19hbmltYXRpb24ge1xuICB0ZXh0LXNoYWRvdzogMC41cmVtIDAuNHJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xufVxuXG4uY2FyZC10aXRsZV9fYW5pbWF0aW9uOmZvY3VzLFxuLmNhcmQtdGl0bGVfX2FuaW1hdGlvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKSBza2V3WCgxNWRlZyk7XG4gIHRleHQtc2hhZG93OiAwLjVyZW0gMC40cmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuXG5cbi5jYXJkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnVuaVRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDIuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uYnRuIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5idG4tYW5pbWF0aW9uOmZvY3VzLFxuLmJ0bi1hbmltYXRpb246aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICBhbmltYXRpb246IHB1bHNhdGUgMXMgaW5maW5pdGU7XG59XG5cbiNidG5DYWwge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgZm9udC1mYW1pbHk6IGNvdXJpZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2J0blBybyB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBmb250LWZhbWlseTogY291cmllcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jYnRuUmVzdCB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBmb250LWZhbWlseTogY291cmllcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jYnRuU25ha2Uge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgZm9udC1mYW1pbHk6IGNvdXJpZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3dlYlNpdGUge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgZm9udC1mYW1pbHk6IGNvdXJpZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQGtleWZyYW1lcyBwdWxzYXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEwKTtcbiAgICBib3gtc2hhZG93OiAwIDFyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdHdpc3Qge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSBza2V3WSgyZGVnKTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXJlbSA0cmVtIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2tld1goMTVkZWcpO1xuICAgIHRleHQtc2hhZG93OiAwIDFyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p class=\"uniTitle\"> BSc (Hons) Computing, Manchester Metropolitan University <br>\n    (Sept 2015 – May 2018)</p>\n  <hr>\n  <h4>Third Year: 1st Class</h4>\n  <div class=\"card-deck\">\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title card-title__animation\">{{ yearThree[0] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ projectDescription }}</p>\n        <hr>\n        <div class=\"text-center\">\n          <a id=\"btnPro\" (click)=\"clickProject()\" class=\"btn btn-dark btn-mm btn-animation\">\n            <i class=\"fab fa-github\"></i> Multiplayer Shooter\n          </a>\n          <hr>\n          <a id=\"webSite\" (click)=\"webSite()\" class=\"btn btn-dark btn-mm btn-animation\">\n            <i class=\"fas fa-globe\"></i> Lunch Game\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title card-title__animation\">{{ yearThree[1] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ advDescription }}</p>\n        <hr>\n        <div class=\"text-center\">\n          <a id=\"btnCal\" (click)=\"clickCal()\" class=\"btn btn-dark btn-mm btn-animation\">\n            <i class=\"fab fa-github\"></i> Mortgage Calculator\n          </a>\n          <hr>\n          <a id=\"btnRest\" (click)=\"clickRest()\" class=\"btn btn-dark btn-mm btn-animation\">\n            <i class=\"fab fa-github\"></i> Paperless Restaurant\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-deck\">\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title card-title__animation\">{{ yearThree[2] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ dataEng }}</p>\n        <hr>\n      </div>\n    </div>\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title card-title__animation\">{{ yearThree[3] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ infoSystems }}</p>\n        <hr>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <h4>Second Year: 1st Class</h4>\n  <div class=\"card-deck\">\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title\">{{ yearTwo[0] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ webDesign }}</p>\n        <hr>\n        <div class=\"text-center\">\n          <a id=\"btnSnake\" (click)=\"clickSnake()\" class=\"btn btn-dark btn-mm btn-animation\">\n            <i class=\"fab fa-github\"></i> Multiplayer Snake Game\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title card-title__animation\">{{ yearTwo[1] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ webBased }}</p>\n        <hr>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-deck\">\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title card-title__animation\">{{ yearTwo[2] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ dataBase }}</p>\n        <hr>\n      </div>\n    </div>\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title card-title__animation\">{{ yearTwo[3] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ prof }}</p>\n        <hr>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <h4>First Year: 1st Class</h4>\n  <div class=\"card-deck\">\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title card-title__animation\">{{ yearOne[0] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ javaProg }}</p>\n        <hr>\n      </div>\n    </div>\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title card-title__animation\">{{ yearOne[1] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ webMulti }}</p>\n        <hr>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-deck\">\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title card-title__animation\">{{ yearOne[2] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ compFund }}</p>\n        <hr>\n      </div>\n    </div>\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title card-title__animation\">{{ yearOne[3] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ infoSys }}</p>\n        <hr>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <h4>College / High School</h4>\n  <div class=\"card-deck\">\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title card-title__animation\">{{ college [0] }}<br>{{ college [1] }}<br>{{ college [2] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ gradeCollege [0] }}<br>{{ gradeCollege [1] }}</p>\n        <hr>\n      </div>\n    </div>\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title card-title__animation\">{{ baysideSchool [0] }}<br>{{ baysideSchool [1] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ baySide }}</p>\n        <hr>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
        this.yearThree = ['Project', 'Advanced Web Development', 'Data Engineering', 'Information Systems Strategy'];
        this.yearTwo = ['Web Design and Development', 'Web Based Business Systems', 'Database Systems', 'Professional Development'];
        this.yearOne = ['Java Programming', 'Computer System Fundamentals', 'Web and Multimedia', 'Information Systems and Database'];
        this.college = ['Kingston College, London', 'Merit', '(Sept 2014 – July 2015)'];
        this.baysideSchool = ['Bayside Comprehensive, Gibraltar', '(2006 – 2010)'];
        this.gradeCollege = ['Access to Higher Education Computing.', 'Selected for meetings with OCN London to give feedback on how to improve the access courses.'];
        this.projectDescription = 'Research, design, implement, test and evaluate a JavaScript Game, made using Node.js, MongoDB, JavaScript and HTML5/CSS. Repository hosted on GitHub.';
        this.advDescription = 'Production of a mortgage calculator application, made using Angular. Research and comparison of web development frameworks to create a paperless restaurant application using Vue.js.';
        this.dataEng = 'Research, analyse, test different methods of data mining technologies. Cleaned and made sense of a data set for mortgage applicants.';
        this.infoSystems = 'Research different strategies and strategic planning in organisations, and how information systems and information technologies exploitation is central in supporting strategic goals.';
        this.webDesign = 'Design, implement, test a JavaScript Game, made using JavaScript, Node.js, SQL and HTML5/CSS. Create fully working website with user login system, online chat using JQuery and PHP.';
        this.webBased = 'Critically evaluate different technologies, use contemporary off-the-shelf e-commerce packages to sell goods, develop online and multi-channel marketing strategies, create web-based software for commerce with user tracking.';
        this.dataBase = 'Database Modelling (UML Diagrams and relational schemas). SQL Database implementation, relational algebra, physical aspects, query processing and optimisation, concurrency control and interfacing with programming languages and environments.';
        this.prof = 'Worked in a group to produce a fully working website and application for a small business. Group leader of the team assigning different roles to students.';
        this.javaProg = 'Intro to Java, and creating a space invaders shooting game.';
        this.webMulti = 'Principles of web design fundamentals with programs such as Photoshop and using CSS styling.';
        this.compFund = 'Assembly language and discrete mathematic theory.';
        this.infoSys = 'Production of an Oracle SQL database and learning database fundamentals.';
        this.baySide = "GCSE's Including English and Mathematics.";
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent.prototype.clickProject = function () {
        window.open('https://github.com/ElAndy94/Multiplayer-Shooting-Game');
    };
    EducationComponent.prototype.clickCal = function () {
        window.open('https://github.com/ElAndy94/Mortgage-Calculator');
    };
    EducationComponent.prototype.clickRest = function () {
        window.open('https://github.com/ElAndy94/Paperless-Restaurant');
    };
    EducationComponent.prototype.clickSnake = function () {
        window.open('https://github.com/ElAndy94/First-Project-MultiPlayer-SnakeGame');
    };
    EducationComponent.prototype.webSite = function () {
        window.open('https://fathomless-escarpment-26242.herokuapp.com/');
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  font-weight: 700;\n  text-align: center;\n  letter-spacing: 1px;\n  text-shadow: 0.5rem 0.4rem 2rem rgba(0, 0, 0, 0.3);\n  transition: all 1s;\n}\n\nh4:focus,\nh4:hover {\n  text-shadow: 0.5rem 0.4rem 2rem rgba(0, 0, 0, 0.8);\n  -webkit-transform: scale(1.2) skewX(25deg);\n          transform: scale(1.2) skewX(25deg);\n}\n\n.card-title {\n  text-align: center;\n  font-weight: bold;\n}\n\n.card-text {\n  text-align: center;\n  font-style: italic;\n}\n\n.uniTitle {\n  padding-top: 2.5em;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixtREFBbUQ7RUFDbkQsbUJBQW1CO0NBQ3BCOztBQUVEOztFQUVFLG1EQUFtRDtFQUNuRCwyQ0FBbUM7VUFBbkMsbUNBQW1DO0NBQ3BDOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtc2hhZG93OiAwLjVyZW0gMC40cmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cbmg0OmZvY3VzLFxuaDQ6aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogMC41cmVtIDAuNHJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHNrZXdYKDI1ZGVnKTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi51bmlUaXRsZSB7XG4gIHBhZGRpbmctdG9wOiAyLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p class=\"uniTitle\"> Work Experience -<br>\n    Including Volunteer Experience and References.\n  </p>\n  <hr>\n  <h4>Work Experience</h4>\n  <div class=\"card-deck\">\n      <div class=\"card border-dark mb-3\">\n          <div class=\"card-body text-dark\">\n            <h5 class=\"card-title\">{{ workExp[10] }}<br>{{ workExp[11] }}</h5>\n            <hr>\n            <p class=\"card-text\">{{ fullstack [0] }}<br>{{ fullstack [1] }}<br>{{ fullstack [2] }}<br>{{ fullstack [3] }}<br>{{ fullstack [4] }}</p>\n          </div>\n        </div>\n      <div class=\"card border-dark mb-3\">\n          <div class=\"card-body text-dark\">\n            <h5 class=\"card-title\">{{ workExp[8] }}<br>{{ workExp[9] }}</h5>\n            <hr>\n            <p class=\"card-text\">{{ software [0] }}<br>{{ software [1] }}<br>{{ software [2] }}<br>{{ software [3] }}<br>{{ software [4] }}<br>{{ software [5] }}</p>\n          </div>\n        </div>\n  </div>\n  <div class=\"card-deck\">\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title\">{{ workExp[0] }}<br>{{ workExp[1] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ cust [0] }}<br>{{ cust [1] }}<br>{{ cust [2] }}<br>{{cust [3] }}</p>\n      </div>\n    </div>\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title\">{{ workExp[2] }}<br>{{ workExp[3] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ andy [0] }}<br>{{ andy [1] }}<br>{{ andy [2] }}<br>{{andy [3] }}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-deck\">\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title\">{{ workExp[4] }}<br>{{ workExp[5] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ avanti [0] }}<br>{{ avanti [1] }}<br>{{ avanti [2] }}<br>{{ avanti [3] }}</p>\n      </div>\n    </div>\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title\">{{ workExp[6] }}<br>{{ workExp[7] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ ict [0] }}<br>{{ ict [1] }}<br>{{ ict [2] }}<br>{{ ict [3] }}</p>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <h4>Volunteer Experience</h4>\n  <div class=\"card border-dark mb-3\">\n    <div class=\"card-body text-dark\">\n      <h5 class=\"card-title\">{{ vol [0] }}<br> {{ vol [1] }}</h5>\n      <hr>\n      <p class=\"card-text\">{{ volunt [0] }}<br>{{ volunt [1] }}<br>{{ volunt [2] }}<br>{{ volunt [3] }}</p>\n    </div>\n  </div>\n  <hr>\n  <h4>References</h4>\n  <div class=\"card-deck\">\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title\">{{ jobRef [0] }}<br>{{ jobRef [1] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ pref [0] }}<br>{{ pref [1] }}<br>{{ pref [2] }}<br>{{ pref [3] }}<br>{{ pref [4] }}</p>\n      </div>\n    </div>\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <h5 class=\"card-title\">{{ jobRef [2] }}<br>{{ jobRef [3] }}</h5>\n        <hr>\n        <p class=\"card-text\">{{ ppref [0] }}<br>{{ ppref [1] }}<br>{{ ppref [2] }}<br>{{ ppref [3] }}<br> {{ ppref [4]\n          }}<br>{{ ppref [5] }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
        this.workExp = [
            '(Summer Job) Customs Officer, Gibraltar',
            '(Jun 2015 – Aug 2015)',
            'Managing Director of Andy Holdings Ltd',
            '(May 2013 – Aug 2015)',
            'Co-Founder of Avanti Construction & Maintenance',
            '(Oct 2012 – Mar 2013)',
            'ICT Technician, Systems Services, Gibraltar',
            '(Mar 2011 – May 2011)',
            'Software Developer, Manchester Metropolitan University',
            '(Jun 2018 – Sep 2018)',
            'FullStack Developer, Eversmart Energy',
            '(Sep 2018 – Nov 2018)'
        ];
        this.vol = ['Trainee at Gibraltar Fire & Rescue', 'May 2010 – May 2010'];
        this.jobRef = [
            'Francis Rodriguez',
            'Customs Officer Manager',
            'Dr Kristopher Welsh',
            'University Tutor'
        ];
        this.cust = [
            '• Signing important classified papers and checking merchandise, which gave me legal knowledge.',
            '• Dealing with various clients to sign off the clearing merchandise forms.',
            '• Clearing items and personal that cross the borders.',
            '• Keeping all old records up to date with the system.'
        ];
        this.andy = [
            '• Assisted the clients with refurbishments and other duties as required, working in line with health and safety.',
            '• Supplied all deliveries to the clients personally which made me dependable and punctual.',
            '• Managed my time for projects and their deadlines which helped me learn to work under pressure.',
            '• Delivered high standards to exceed the customers’ needs.',
            '• Dealt with various businesses involving high demands.'
        ];
        this.avanti = [
            '• Learnt the fundamentals of owning a business and the responsibilities associated.',
            '• Read over contracts thoroughly and ensure that contract requirement is met.',
            '• Made cost estimations for different types of refurbishments with various scales of projects.',
            '• Lead a team of over fifteen employees which strongly improved my responsibility skills.'
        ];
        this.ict = [
            '• Installed and configured internet content filtering system for client businesses.',
            '• Reinstalled software on computers for customers independently.',
            '• Regularly took computers apart and rebuilt them for customers.',
            '• Found and replaced defected component(s)'
        ];
        this.volunt = [
            '• This linked up with my past work experience at high school in which I also chose to learn about the Fire Brigade.',
            '• Learnt the importance of a Fireman’s role.',
            '• Trained on physical tasks such as abseiling.',
            '• Learnt how to work under pressure in advanced rescue skills.',
            '• Quick learner to adapt to every different tests and training with different scenarios daily.'
        ];
        this.pref = [
            'Telephone: +350 54013879',
            'Address:',
            'Customs House',
            'Waterport',
            'Gibraltar',
            'GX11 1AA'
        ];
        this.ppref = [
            'Email: k.welsh@mmu.ac.uk',
            'Telephone: +44 (0)161 247 3531',
            'Address:',
            'Manchester Metropolitan University',
            'Chester Street',
            'Manchester',
            'M1 5GD'
        ];
        this.software = [
            '*Contract Short Term*',
            '• Develop a bespoke application for real-world use.',
            '• Research, design, implement and test a custom web application to support the creation of augmented reading lists.',
            '• An application which allows tutors to upload documents which can then be annotated with simplifications and explanations where necessary.',
            '• Participating in ongoing research and making a difference to the learning experience of other students.',
            '• Ensure consistency and maximise efficiency.'
        ];
        this.fullstack = [
            '• Developing software in time for release date.',
            '• Making sure that the system is ready for lunch day.',
            '• Checking that the full website is reponsive on all browsers',
            '• Fixing errors or simplying code.',
            '• Ensure consistency throughout.'
        ];
    }
    ExperienceComponent.prototype.ngOnInit = function () { };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  padding-top: 1.25em;\n  text-align: center;\n  font-weight: 400;\n  /* background-size: cover; */\n  /* background-image: linear-gradient(to right bottom, rgba(111, 172, 213, 0.4), rgba(83, 134, 211, 0.4)), url('../../assets/images/background.jpg'); */\n  /* height: 100vh; */\n  /* margin-right: 0 !important; */\n  /* margin-left: 0 !important; */\n  /* background-image: linear-gradient(to right bottom, rgba(111, 172, 213, 0.8), rgba(83, 134, 211, 0.8)); */\n}\n\n.container h2 {\n  letter-spacing: .3em;\n  font-size: 3.5em;\n  font-weight: 700;\n  -webkit-text-stroke: 1px black;\n  color: white;\n  text-shadow:\n      3px 3px 0 #000,\n    -1px -1px 0 #000,\n     1px -1px 0 #000,\n     -1px 1px 0 #000,\n      1px 1px 0 #000;\n}\n\n.card-text {\n  font-size: 20px;\n  text-align: center;\n  font-style: italic;\n}\n\n.card-body {\n  padding-top: 1em;\n}\n\n.mySpace {\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n\n.btn-animation:focus,\n.btn-animation:hover {\n  outline: none;\n  -webkit-animation: pulsate 1s infinite;\n          animation: pulsate 1s infinite;\n}\n\n#btnMe {\n  margin-top: 1em;\n  color: white;\n}\n\n#btnMore {\n  color: white;\n}\n\n#btnMarg {\n  margin-right: 1.5em;\n  color: white;\n}\n\n#btnRight {\n  color: white;\n}\n\n.btn {\n  transition: all 0.2s;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n@-webkit-keyframes pulsate {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n\n  50% {\n    -webkit-transform: scale(1.10);\n            transform: scale(1.10);\n    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n}\n\n@keyframes pulsate {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n\n  50% {\n    -webkit-transform: scale(1.10);\n            transform: scale(1.10);\n    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLHVKQUF1SjtFQUN2SixvQkFBb0I7RUFDcEIsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQyw0R0FBNEc7Q0FDN0c7O0FBRUQ7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiOzs7OztxQkFLbUI7Q0FDcEI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7O0FBRUQ7O0VBRUUsY0FBYztFQUNkLHVDQUErQjtVQUEvQiwrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQiw4RUFBOEU7Q0FDL0U7O0FBRUQ7RUFDRTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw0Q0FBNEM7R0FDN0M7O0VBRUQ7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtHQUNsQjtDQUNGOztBQWZEO0VBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsNENBQTRDO0dBQzdDOztFQUVEO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixpQkFBaUI7R0FDbEI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMS4yNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sIHJnYmEoMTExLCAxNzIsIDIxMywgMC40KSwgcmdiYSg4MywgMTM0LCAyMTEsIDAuNCkpLCB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcnKTsgKi9cbiAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cbiAgLyogbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7ICovXG4gIC8qIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7ICovXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sIHJnYmEoMTExLCAxNzIsIDIxMywgMC44KSwgcmdiYSg4MywgMTM0LCAyMTEsIDAuOCkpOyAqL1xufVxuXG4uY29udGFpbmVyIGgyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IC4zZW07XG4gIGZvbnQtc2l6ZTogMy41ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzpcbiAgICAgIDNweCAzcHggMCAjMDAwLFxuICAgIC0xcHggLTFweCAwICMwMDAsXG4gICAgIDFweCAtMXB4IDAgIzAwMCxcbiAgICAgLTFweCAxcHggMCAjMDAwLFxuICAgICAgMXB4IDFweCAwICMwMDA7XG59XG5cbi5jYXJkLXRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDFlbTtcbn1cblxuLm15U3BhY2Uge1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4uYnRuLWFuaW1hdGlvbjpmb2N1cyxcbi5idG4tYW5pbWF0aW9uOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYW5pbWF0aW9uOiBwdWxzYXRlIDFzIGluZmluaXRlO1xufVxuXG4jYnRuTWUge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2J0bk1vcmUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNidG5NYXJnIHtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jYnRuUmlnaHQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2F0ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xMCk7XG4gICAgYm94LXNoYWRvdzogMCAxcmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center\">\n    <h2>Andrew Peliza</h2>\n    <hr>\n    <p class=\"card-text\">{{ andyInfo [0] }} </p>\n    <p class=\"card-text\">{{ andyInfo [1] }} </p>\n    <p class=\"card-text\">{{ andyInfo [2] }} </p>\n    <p class=\"card-text\">{{ andyInfo [3] }} </p>\n    <p class=\"card-text\">{{ andyInfo [4] }} </p>\n    <p class=\"card-text\">{{ andyInfo [5] }} </p>\n    <p class=\"card-text\"><u>{{ andyInfo [6] }}</u></p>\n    <div class=\"text-center\">\n      <a class=\"btn btn-dark btn-mm btn-animation\" id=\"btnMe\" (click)=\"clickedMe()\"> Get to Know More...\n        <i class=\"fas fa-exclamation\"></i>\n      </a>\n      <div *ngIf=\"show\">\n        <div class=\"card-body text-dark\">\n          <hr>\n          <p class=\"card-text\">{{ thirdInfo [0] }}<br><br>{{ thirdInfo [1] }}</p>\n          <hr>\n          <a class=\"btn btn-dark btn-mm btn-animation\" id=\"btnMore\" (click)=\"clickedMeToo()\"> Want to know even more...\n            <i class=\"fas fa-question\"></i>\n          </a>\n          <div *ngIf=\"showTwo\">\n            <div class=\"card-body text-dark\">\n              <hr>\n              <p class=\"card-text\">{{ lastInfo }}<br><b><br>{{ bonus [0] }}</b><br> {{bonus [1] }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"text-center\">\n      <div class=\"mySpace\">\n        <a class=\"btn btn-dark btn-mm btn-animation\" id=\"btnMarg\" (click)=\"openGit()\">\n          <i class=\"fab fa-github\"></i> GitHub\n        </a>\n        <a class=\"btn btn-dark btn-mm btn-animation\" id=\"btnRight\" (click)=\"openLink()\">\n          <i class=\"fab fa-linkedin\"></i> LinkedIn\n        </a>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.show = false;
        this.showTwo = false;
        this.andyInfo = [
            'Hello! My name is Andrew Peliza',
            'Working on personal projects and achiving qualifications until I find the right job;',
            'On my journey to become a successful developer.',
            'I have a diverse set of skills ranging from; design, to HTML5, CSS',
            'JavaScript (Express, Node.js, Angular.js, Vue.js, React.js, TypeScript, Python), AWS',
            'PHP, SQL, jQuery and basic knowledge of other languages...',
            'Graduated with a First Class Honours Degree.',
            'LinkedIn Profile: https://www.linkedin.com/in/andrewpeliza',
            'GitHub: https://github.com/ElAndy94'
        ];
        this.thirdInfo = [
            'I enjoy challenges and consider myself an enterprising individual who likes to take risks and use my own initiative.',
            'I have an approachable personality in which I can socialise well with the public and work well in a team.'
        ];
        this.bonus = ['*Bonus*', 'I am fluent in both English and Spanish.'];
        this.lastInfo = 'I am an exceedingly organised person who is willing to take on new challenges and be pushed to the best of my ability.';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.openGit = function () {
        window.open('https://github.com/ElAndy94');
    };
    HomeComponent.prototype.openLink = function () {
        window.open('https://www.linkedin.com/in/andrewpeliza');
    };
    HomeComponent.prototype.clickedMe = function () {
        if (this.show === false) {
            this.show = true;
        }
        else {
            this.show = false;
        }
    };
    HomeComponent.prototype.clickedMeToo = function () {
        if (this.showTwo === false) {
            this.showTwo = true;
        }
        else {
            this.showTwo = false;
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interests/interests.component.css":
/*!***************************************************!*\
  !*** ./src/app/interests/interests.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-top: 4em;\n}\n\n.card-text {\n  text-align: center;\n  font-style: italic;\n  font-size: 16px;\n  /* font-weight: 900; */\n}\n\n.btn:focus,\n.btn:hover {\n  outline: none;\n  -webkit-animation: pulsate 1s infinite;\n          animation: pulsate 1s infinite;\n  /* background-color: #6a7077; */\n}\n\n#btnMarg {\n  margin-top: 2em;\n  color: white;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  font-family: courier;\n}\n\n#btnWeb {\n  /*margin-top: 2em;*/\n  color: white;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  font-family: courier;\n}\n\n@-webkit-keyframes pulsate {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n\n  50% {\n    -webkit-transform: scale(1.10);\n            transform: scale(1.10);\n    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.8);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n}\n\n@keyframes pulsate {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n\n  50% {\n    -webkit-transform: scale(1.10);\n            transform: scale(1.10);\n    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.8);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJlc3RzL2ludGVyZXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0NBQ3hCOztBQUVEOztFQUVFLGNBQWM7RUFDZCx1Q0FBK0I7VUFBL0IsK0JBQStCO0VBQy9CLGdDQUFnQztDQUNqQzs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEVBQThFO0VBQzlFLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsOEVBQThFO0VBQzlFLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJDQUEyQztHQUM1Qzs7RUFFRDtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsaUJBQWlCO0dBQ2xCO0NBQ0Y7O0FBZkQ7RUFDRTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QiwyQ0FBMkM7R0FDNUM7O0VBRUQ7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtHQUNsQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvaW50ZXJlc3RzL2ludGVyZXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA0ZW07XG59XG5cbi5jYXJkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxNnB4O1xuICAvKiBmb250LXdlaWdodDogOTAwOyAqL1xufVxuXG4uYnRuOmZvY3VzLFxuLmJ0bjpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGFuaW1hdGlvbjogcHVsc2F0ZSAxcyBpbmZpbml0ZTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzZhNzA3NzsgKi9cbn1cblxuI2J0bk1hcmcge1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIGZvbnQtZmFtaWx5OiBjb3VyaWVyO1xufVxuXG4jYnRuV2ViIHtcbiAgLyptYXJnaW4tdG9wOiAyZW07Ki9cbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgZm9udC1mYW1pbHk6IGNvdXJpZXI7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2F0ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xMCk7XG4gICAgYm94LXNoYWRvdzogMCAxcmVtIDRyZW0gcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/interests/interests.component.html":
/*!****************************************************!*\
  !*** ./src/app/interests/interests.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center\">\n    <div class=\"card border-dark mb-3\">\n      <div class=\"card-body text-dark\">\n        <p class=\"card-text\">{{ interests [0] }} </p>\n        <hr>\n        <p class=\"card-text\">{{ interests [1] }} </p>\n        <hr>\n        <p class=\"card-text\">{{ interests [2] }} </p>\n        <hr>\n        <p class=\"card-text\">{{ interests [3] }} </p>\n        <div class=\"text-center\">\n          <a id=\"btnMarg\" (click)=\"clickAng()\" class=\"btn btn-dark btn-mm \">\n            <i class=\"fab fa-github\"></i> Projects\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/interests/interests.component.ts":
/*!**************************************************!*\
  !*** ./src/app/interests/interests.component.ts ***!
  \**************************************************/
/*! exports provided: InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return InterestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InterestsComponent = /** @class */ (function () {
    function InterestsComponent() {
        this.interests = ['My main hobbies are sports and keeping physically fit. I currently enjoy going to the gym daily as this helps me motivate myself to achieve my own personal goals. This has proved to me that I have strong determination to attain my long-term goals.', 'During my second year at university I developed a passion for software development and because of this I developed a web application for my final year project. This made me realise that I would like a career in software development.', 'To further develop my skills, I take courses on Udemy in which my progression can be found on my GitHub, alongside with all my other software development projects.', 'All certificates have been put on my LinkedIn profile with all my extra online courses - Including my full Angular 6/7, React, Advanced CSS/SASS, MEAN Stack Course, Python and many more!'];
    }
    InterestsComponent.prototype.ngOnInit = function () {
    };
    InterestsComponent.prototype.clickAng = function () {
        window.open('https://github.com/ElAndy94');
    };
    InterestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interests',
            template: __webpack_require__(/*! ./interests.component.html */ "./src/app/interests/interests.component.html"),
            styles: [__webpack_require__(/*! ./interests.component.css */ "./src/app/interests/interests.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InterestsComponent);
    return InterestsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item-cust {\n  padding-left: 50px;\n  font-family: courier;\n}\n\n.navbar-brand {\n  font-family: courier;\n}\n\n.navbar {\n  margin-bottom: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbS1jdXN0IHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBmb250LWZhbWlseTogY291cmllcjtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtZmFtaWx5OiBjb3VyaWVyO1xufVxuXG4ubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Andrew Peliza</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleClick()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item-cust\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item-cust\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/education\">Education</a>\n      </li>\n      <li class=\"nav-item-cust\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/experience\">Experience</a>\n      </li>\n      <li class=\"nav-item-cust\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/projects\">Projects</a>\n        </li>\n      <li class=\"nav-item-cust\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/interests\">Interests</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.toggling = 'true';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleClick = function () {
        if (this.toggling === 'true') {
            this.toggling = 'false';
        }
        else {
            this.toggling = 'true';
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  padding-top: 1.25em;\n  text-align: center;\n  font-weight: 400;\n}\n\n.projects {\n  padding-top: 2em;\n}\n\nh1 {\n  letter-spacing: .3em;\n  font-size: 3.2em;\n  font-weight: 700;\n  -webkit-text-stroke: 1px black;\n  color: white;\n  text-shadow:\n      3px 3px 0 #000,\n    -1px -1px 0 #000,\n     1px -1px 0 #000,\n     -1px 1px 0 #000,\n      1px 1px 0 #000;\n}\n\nh2 {\n  padding-bottom: 5px;\n}\n\nh4 {\n  padding-top: 3em;\n  font-weight: 500;\n  letter-spacing: 1px;\n  font-size: x-large;\n}\n\n.centerCard {\n  margin: 0 auto;\n  float: none;\n  margin-bottom: 10px;\n  width: 50%;\n  margin-top: 3em;\n}\n\n.card-img-top {\n  height: 50%;\n}\n\n/* @media (min-width:320px)  { smartphones, iPhone, portrait 480x320 phones } */\n\n/* @media (min-width:481px)  { portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. } */\n\n.imgAnimation {\n  transition: all 1s ease-out;\n}\n\n.imgAnimation:focus,\n.imgAnimation:hover {\n  -webkit-transform: scale(1.90) translateY(-.5rem);\n          transform: scale(1.90) translateY(-.5rem);\n  box-shadow: 0 2.5rem 4rem rgba(0,0,0, .5);\n}\n\n@media (max-width:961px)  { \n  .imgAnimation {\n    transition: none;\n  }\n\n  .imgAnimation:focus,\n  .imgAnimation:hover {\n  -webkit-transform: scale(1) translateY(0);\n          transform: scale(1) translateY(0);\n  box-shadow: none;\n  }\n}\n\n.composition {\n  margin-top: 2em;\n  position: relative;\n  height: 50vh;\n}\n\n.composition__photo {\n    width: 20%;\n    box-shadow: 0 1.5rem 4rem rgba(0,0,0,.4);\n    border-radius: 1px;\n    position: absolute;\n    z-index: 10;\n    transition: all 1s ease-out;\n    outline-offset: 1rem;\n}\n\n/* @include respond(tab-port) {\n        float: left;\n        position: relative;\n        width: 33.333333%;\n        box-shadow: 0 1.5rem 3rem rgba($color-black, .2);\n      } */\n\n.composition__photo--p1 {\n  left: 0;\n  top: 2rem;\n  /* @include respond(tab-port) {\n    top: 0;\n    transform: scale(1.2);\n  } */\n}\n\n.composition__photo--p2 {\n  left: 56%;\n  top: 14rem;\n  /* @include respond(tab-port) {\n    top: -1rem;\n    transform: scale(1.3);\n    z-index: 100;\n  } */\n}\n\n.composition__photo--p3 {\n  left: 13%;\n  top: 2rem;\n  /* @include respond(tab-port) {\n    left: 0;\n    top: 1rem;\n    transform: scale(1.1);\n  } */\n}\n\n.composition__photo--p4 {\n  left: 30%;\n  top: 2rem;\n  /* @include respond(tab-port) {\n    left: 0;\n    top: 1rem;\n    transform: scale(1.1);\n  } */\n}\n\n.composition__photo--p5 {\n  left: 47%;\n  top: 2rem;\n  /* @include respond(tab-port) {\n    left: 0;\n    top: 1rem;\n    transform: scale(1.1);\n  } */\n}\n\n.composition__photo--p6 {\n  left: 21%;\n  top: 14rem;\n  /* @include respond(tab-port) {\n    left: 0;\n    top: 1rem;\n    transform: scale(1.1);\n  } */\n}\n\n.composition__photo--p7 {\n  left: 3%;\n  top: 14rem;\n  /* @include respond(tab-port) {\n    left: 0;\n    top: 1rem;\n    transform: scale(1.1);\n  } */\n}\n\n.composition__photo--p8 {\n  left: 73%;\n  top: 14rem;\n  /* @include respond(tab-port) {\n    left: 0;\n    top: 1rem;\n    transform: scale(1.1);\n  } */\n}\n\n.composition__photo--p9 {\n  left: 75%;\n  top: 2rem;\n  /* @include respond(tab-port) {\n    left: 0;\n    top: 1rem;\n    transform: scale(1.1);\n  } */\n}\n\n.composition__photo--p10 {\n  left: 62%;\n  top: 2rem;\n  /* @include respond(tab-port) {\n    left: 0;\n    top: 1rem;\n    transform: scale(1.1);\n  } */\n}\n\n.composition__photo--p11 {\n  left: 38%;\n  top: 14rem;\n  /* @include respond(tab-port) {\n    left: 0;\n    top: 1rem;\n    transform: scale(1.1);\n  } */\n}\n\n.composition__photo:hover {\n  outline: 1.3rem solid green;\n  -webkit-transform: scale(1.90) translateY(-.5rem);\n          transform: scale(1.90) translateY(-.5rem);\n  box-shadow: 0 2.5rem 4rem rgba(0,0,0, .5);\n  z-index: 20;\n}\n\n/* }\n\n    &:hover &__photo:not(:hover) {\n      transform: scale(.95);\n    }\n} */\n\n@media only screen and (max-width: 900px) {\n  h1 {\n    font-size: 2.0em;\n  }\n\n  .centerCard {\n    width: 100%;\n  }\n\n  .composition__photo:hover {\n    outline: .3rem solid green;\n    -webkit-transform: scale(1.90) translateY(-.5rem);\n            transform: scale(1.90) translateY(-.5rem);\n  }\n}\n\n.btn {\n  transition: all 0.2s;\n}\n\n.btn-animation:focus,\n.btn-animation:hover {\n  outline: none;\n  -webkit-animation: pulsate 1s infinite;\n          animation: pulsate 1s infinite;\n}\n\n.btnColor {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  font-family: courier;\n  color: white !important;\n}\n\n@-webkit-keyframes pulsate {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n\n  50% {\n    -webkit-transform: scale(1.10);\n            transform: scale(1.10);\n    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n}\n\n@keyframes pulsate {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n\n  50% {\n    -webkit-transform: scale(1.10);\n            transform: scale(1.10);\n    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2I7Ozs7O3FCQUttQjtDQUNwQjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQsZ0ZBQWdGOztBQUNoRiwwR0FBMEc7O0FBRTFHO0VBQ0UsNEJBQTRCO0NBQzdCOztBQUVEOztFQUVFLGtEQUEwQztVQUExQywwQ0FBMEM7RUFDMUMsMENBQTBDO0NBQzNDOztBQUVEO0VBQ0U7SUFDRSxpQkFBaUI7R0FDbEI7O0VBRUQ7O0VBRUEsMENBQWtDO1VBQWxDLGtDQUFrQztFQUNsQyxpQkFBaUI7R0FDaEI7Q0FDRjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtDQUNkOztBQUVEO0lBQ0ksV0FBVztJQUNYLHlDQUF5QztJQUN6QyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIscUJBQXFCO0NBQ3hCOztBQUNLOzs7OztVQUtJOztBQUVWO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVjs7O01BR0k7Q0FDTDs7QUFFRDtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1g7Ozs7TUFJSTtDQUNMOztBQUVEO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVjs7OztNQUlJO0NBQ0w7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWOzs7O01BSUk7Q0FDTDs7QUFFRDtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1Y7Ozs7TUFJSTtDQUNMOztBQUVEO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWDs7OztNQUlJO0NBQ0w7O0FBRUQ7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYOzs7O01BSUk7Q0FDTDs7QUFFRDtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1g7Ozs7TUFJSTtDQUNMOztBQUVEO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVjs7OztNQUlJO0NBQ0w7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWOzs7O01BSUk7Q0FDTDs7QUFFRDtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1g7Ozs7TUFJSTtDQUNMOztBQUVEO0VBQ0UsNEJBQTRCO0VBQzVCLGtEQUEwQztVQUExQywwQ0FBMEM7RUFDMUMsMENBQTBDO0VBQzFDLFlBQVk7Q0FDYjs7QUFDRzs7Ozs7SUFLQTs7QUFFSjtFQUNFO0lBQ0UsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0UsWUFBWTtHQUNiOztFQUVEO0lBQ0UsMkJBQTJCO0lBQzNCLGtEQUEwQztZQUExQywwQ0FBMEM7R0FDM0M7Q0FDRjs7QUFFRDtFQUNFLHFCQUFxQjtDQUN0Qjs7QUFFRDs7RUFFRSxjQUFjO0VBQ2QsdUNBQStCO1VBQS9CLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLDhFQUE4RTtFQUM5RSxxQkFBcUI7RUFDckIsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsNENBQTRDO0dBQzdDOztFQUVEO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixpQkFBaUI7R0FDbEI7Q0FDRjs7QUFmRDtFQUNFO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDRDQUE0QztHQUM3Qzs7RUFFRDtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsaUJBQWlCO0dBQ2xCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMS4yNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5wcm9qZWN0cyB7XG4gIHBhZGRpbmctdG9wOiAyZW07XG59XG5cbmgxIHtcbiAgbGV0dGVyLXNwYWNpbmc6IC4zZW07XG4gIGZvbnQtc2l6ZTogMy4yZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzpcbiAgICAgIDNweCAzcHggMCAjMDAwLFxuICAgIC0xcHggLTFweCAwICMwMDAsXG4gICAgIDFweCAtMXB4IDAgIzAwMCxcbiAgICAgLTFweCAxcHggMCAjMDAwLFxuICAgICAgMXB4IDFweCAwICMwMDA7XG59XG5cbmgyIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuaDQge1xuICBwYWRkaW5nLXRvcDogM2VtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbi5jZW50ZXJDYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZsb2F0OiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiAzZW07XG59XG5cbi5jYXJkLWltZy10b3Age1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuLyogQG1lZGlhIChtaW4td2lkdGg6MzIwcHgpICB7IHNtYXJ0cGhvbmVzLCBpUGhvbmUsIHBvcnRyYWl0IDQ4MHgzMjAgcGhvbmVzIH0gKi9cbi8qIEBtZWRpYSAobWluLXdpZHRoOjQ4MXB4KSAgeyBwb3J0cmFpdCBlLXJlYWRlcnMgKE5vb2svS2luZGxlKSwgc21hbGxlciB0YWJsZXRzIEAgNjAwIG9yIEAgNjQwIHdpZGUuIH0gKi9cblxuLmltZ0FuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcbn1cblxuLmltZ0FuaW1hdGlvbjpmb2N1cyxcbi5pbWdBbmltYXRpb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuOTApIHRyYW5zbGF0ZVkoLS41cmVtKTtcbiAgYm94LXNoYWRvdzogMCAyLjVyZW0gNHJlbSByZ2JhKDAsMCwwLCAuNSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjk2MXB4KSAgeyBcbiAgLmltZ0FuaW1hdGlvbiB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5pbWdBbmltYXRpb246Zm9jdXMsXG4gIC5pbWdBbmltYXRpb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cblxuLmNvbXBvc2l0aW9uIHtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTB2aDtcbn1cblxuLmNvbXBvc2l0aW9uX19waG90byB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBib3gtc2hhZG93OiAwIDEuNXJlbSA0cmVtIHJnYmEoMCwwLDAsLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xuICAgIG91dGxpbmUtb2Zmc2V0OiAxcmVtO1xufVxuICAgICAgLyogQGluY2x1ZGUgcmVzcG9uZCh0YWItcG9ydCkge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMzMuMzMzMzMzJTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxLjVyZW0gM3JlbSByZ2JhKCRjb2xvci1ibGFjaywgLjIpO1xuICAgICAgfSAqL1xuXG4uY29tcG9zaXRpb25fX3Bob3RvLS1wMSB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMnJlbTtcbiAgLyogQGluY2x1ZGUgcmVzcG9uZCh0YWItcG9ydCkge1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH0gKi9cbn1cblxuLmNvbXBvc2l0aW9uX19waG90by0tcDIge1xuICBsZWZ0OiA1NiU7XG4gIHRvcDogMTRyZW07XG4gIC8qIEBpbmNsdWRlIHJlc3BvbmQodGFiLXBvcnQpIHtcbiAgICB0b3A6IC0xcmVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICB6LWluZGV4OiAxMDA7XG4gIH0gKi9cbn1cblxuLmNvbXBvc2l0aW9uX19waG90by0tcDMge1xuICBsZWZ0OiAxMyU7XG4gIHRvcDogMnJlbTtcbiAgLyogQGluY2x1ZGUgcmVzcG9uZCh0YWItcG9ydCkge1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAxcmVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfSAqL1xufVxuXG4uY29tcG9zaXRpb25fX3Bob3RvLS1wNCB7XG4gIGxlZnQ6IDMwJTtcbiAgdG9wOiAycmVtO1xuICAvKiBAaW5jbHVkZSByZXNwb25kKHRhYi1wb3J0KSB7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDFyZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9ICovXG59XG5cbi5jb21wb3NpdGlvbl9fcGhvdG8tLXA1IHtcbiAgbGVmdDogNDclO1xuICB0b3A6IDJyZW07XG4gIC8qIEBpbmNsdWRlIHJlc3BvbmQodGFiLXBvcnQpIHtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMXJlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH0gKi9cbn1cblxuLmNvbXBvc2l0aW9uX19waG90by0tcDYge1xuICBsZWZ0OiAyMSU7XG4gIHRvcDogMTRyZW07XG4gIC8qIEBpbmNsdWRlIHJlc3BvbmQodGFiLXBvcnQpIHtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMXJlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH0gKi9cbn1cblxuLmNvbXBvc2l0aW9uX19waG90by0tcDcge1xuICBsZWZ0OiAzJTtcbiAgdG9wOiAxNHJlbTtcbiAgLyogQGluY2x1ZGUgcmVzcG9uZCh0YWItcG9ydCkge1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAxcmVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfSAqL1xufVxuXG4uY29tcG9zaXRpb25fX3Bob3RvLS1wOCB7XG4gIGxlZnQ6IDczJTtcbiAgdG9wOiAxNHJlbTtcbiAgLyogQGluY2x1ZGUgcmVzcG9uZCh0YWItcG9ydCkge1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAxcmVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfSAqL1xufVxuXG4uY29tcG9zaXRpb25fX3Bob3RvLS1wOSB7XG4gIGxlZnQ6IDc1JTtcbiAgdG9wOiAycmVtO1xuICAvKiBAaW5jbHVkZSByZXNwb25kKHRhYi1wb3J0KSB7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDFyZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9ICovXG59XG5cbi5jb21wb3NpdGlvbl9fcGhvdG8tLXAxMCB7XG4gIGxlZnQ6IDYyJTtcbiAgdG9wOiAycmVtO1xuICAvKiBAaW5jbHVkZSByZXNwb25kKHRhYi1wb3J0KSB7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDFyZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9ICovXG59XG5cbi5jb21wb3NpdGlvbl9fcGhvdG8tLXAxMSB7XG4gIGxlZnQ6IDM4JTtcbiAgdG9wOiAxNHJlbTtcbiAgLyogQGluY2x1ZGUgcmVzcG9uZCh0YWItcG9ydCkge1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAxcmVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfSAqL1xufVxuXG4uY29tcG9zaXRpb25fX3Bob3RvOmhvdmVyIHtcbiAgb3V0bGluZTogMS4zcmVtIHNvbGlkIGdyZWVuO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuOTApIHRyYW5zbGF0ZVkoLS41cmVtKTtcbiAgYm94LXNoYWRvdzogMCAyLjVyZW0gNHJlbSByZ2JhKDAsMCwwLCAuNSk7XG4gIHotaW5kZXg6IDIwO1xufVxuICAgIC8qIH1cblxuICAgICY6aG92ZXIgJl9fcGhvdG86bm90KDpob3Zlcikge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xuICAgIH1cbn0gKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjBlbTtcbiAgfVxuXG4gIC5jZW50ZXJDYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb21wb3NpdGlvbl9fcGhvdG86aG92ZXIge1xuICAgIG91dGxpbmU6IC4zcmVtIHNvbGlkIGdyZWVuO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS45MCkgdHJhbnNsYXRlWSgtLjVyZW0pO1xuICB9XG59XG5cbi5idG4ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLmJ0bi1hbmltYXRpb246Zm9jdXMsXG4uYnRuLWFuaW1hdGlvbjpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGFuaW1hdGlvbjogcHVsc2F0ZSAxcyBpbmZpbml0ZTtcbn1cblxuLmJ0bkNvbG9yIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIGZvbnQtZmFtaWx5OiBjb3VyaWVyO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBwdWxzYXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEwKTtcbiAgICBib3gtc2hhZG93OiAwIDFyZW0gNHJlbSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Projects & Certifications</h1>\n  <div class=\"projects\">\n    <h2>Projects</h2>\n    <div class=\"card-deck\">\n      <div class=\"card border-dark mb-3\">\n        <div class=\"card-body text-dark\">\n          <h3 class=\"card-title card-title__animation\">React Burger Builder</h3>\n          <hr />\n          <p class=\"card-text\">Have fun building your custom burger, make sure to check your orders once you have ordered it!</p>\n          <p class=\"card-text\">This was a very exciting project creating a burger builder, as it is responsive and feels like it could be in the real world, it gave me enough challenge to learn React fully, also learnt how to use Redux.</p>\n          <hr />\n          <div class=\"text-center\">\n            <a\n              (click)=\"clickProject()\"\n              class=\"btn btn-dark btn-mm btn-animation btnColor\">\n              <i class=\"fab fa-github\"></i> Github Repo\n            </a>\n            <hr />\n            <a\n              (click)=\"clickWebSite()\"\n              class=\"btn btn-dark btn-mm btn-animation btnColor\">\n              <i class=\"fas fa-globe\"></i> Lunch Website\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"card border-dark mb-3\">\n        <div class=\"card-body text-dark\">\n          <h3 class=\"card-title card-title__animation\">Angular Recipe Book</h3>\n          <hr />\n          <p class=\"card-text\">Add recipies to your recipe book! </p>\n          <p class=\"card-text\">This was my first project using Angular, where I then from this expanded and created more interesting and challenging projects.</p>\n          <hr />\n          <div class=\"text-center\">\n            <a\n              (click)=\"clickAng()\"\n              class=\"btn btn-dark btn-mm btn-animation btnColor\">\n              <i class=\"fab fa-github\"></i> Github Repo\n            </a>\n            <hr />\n            <a\n              (click)=\"webSiteTwo()\"\n              class=\"btn btn-dark btn-mm btn-animation btnColor\">\n              <i class=\"fas fa-globe\"></i> Lunch Website\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"centerCard\">\n    <div class=\"card border-dark mb-3\">\n        <img class=\"card-img-top imgAnimation\" src=\"/assets/images/reactFront.png\" alt=\"React Img\">\n        <div class=\"card-body text-dark\">\n            <h3 class=\"card-title card-title__animation\">React Gym System (Web App)</h3>\n            <hr />\n          <p class=\"card-text\">This is a Gym System which I have created using React, for the backend it uses Express/Node/Mongoose. <br> </p>\n          <p class=\"card-text\"> The functionality of the web app is that you can signup, select your contract type etc, followed by being able to view\n           all the different classes offered by the gym. <br></p> <p class=\"card-text\"> You are able to book the classes and then view your booked classes with all the information about the classes. <br></p>\n          <p class=\"card-text\">All followed by the following operations such as the CRUD, Create classes if you are a PT, read, update classes and delete classes. </p>\n        </div>\n        <div class=\"text-center\">\n          <hr />\n          <a\n            (click)=\"clickReactGymRepo()\"\n            class=\"btn btn-dark btn-mm btn-animation btnColor\">\n            <i class=\"fab fa-github\"></i> Github Repo\n          </a>\n          <hr />\n          <a\n            (click)=\"clickReactGym()\"\n            class=\"btn btn-dark btn-mm btn-animation btnColor\">\n            <i class=\"fas fa-globe\"></i> Lunch Website\n          </a>\n          <hr />\n        </div>\n      </div>\n  </div>\n  <div class=\"col-1-of-2\">\n    <h4>Certifications</h4>\n    <div class=\"composition\">\n      <img\n        src=\"/assets/images/advCSS.jpg\"\n        alt=\"Photo 1\"\n        class=\"composition__photo composition__photo--p1\"\n      />\n      <img\n        src=\"/assets/images/algo.jpg\"\n        alt=\"Photo 2\"\n        class=\"composition__photo composition__photo--p2\"\n      />\n      <img\n        src=\"/assets/images/angular.jpg\"\n        alt=\"Photo 3\"\n        class=\"composition__photo composition__photo--p3\"\n      />\n      <img\n        src=\"/assets/images/es6.jpg\"\n        alt=\"Photo 4\"\n        class=\"composition__photo composition__photo--p4\"\n      />\n      <img\n        src=\"/assets/images/express.jpg\"\n        alt=\"Photo 5\"\n        class=\"composition__photo composition__photo--p5\"\n      />\n      <img\n        src=\"/assets/images/introPy.jpg\"\n        alt=\"Photo 6\"\n        class=\"composition__photo composition__photo--p6\"\n      />\n      <img\n        src=\"/assets/images/mean.jpg\"\n        alt=\"Photo 7\"\n        class=\"composition__photo composition__photo--p7\"\n      />\n      <img\n        src=\"/assets/images/mongoose.jpg\"\n        alt=\"Photo 8\"\n        class=\"composition__photo composition__photo--p8\"\n      />\n      <img\n        src=\"/assets/images/oop.jpg\"\n        alt=\"Photo 9\"\n        class=\"composition__photo composition__photo--p9\"\n      />\n      <img\n        src=\"/assets/images/react.jpg\"\n        alt=\"Photo 10\"\n        class=\"composition__photo composition__photo--p10\"\n      />\n      <img\n        src=\"/assets/images/sass.jpg\"\n        alt=\"Photo 11\"\n        class=\"composition__photo composition__photo--p11\"\n      />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent.prototype.clickProject = function () {
        window.open('https://github.com/ElAndy94/react-burger');
    };
    ProjectsComponent.prototype.clickWebSite = function () {
        window.open('https://react-my-burger-9a8a8.firebaseapp.com/');
    };
    ProjectsComponent.prototype.clickAng = function () {
        window.open('https://github.com/ElAndy94/Recipe-book');
    };
    ProjectsComponent.prototype.webSiteTwo = function () {
        window.open('http://ng-recipe-deploy-angular.s3-website.eu-west-2.amazonaws.com/');
    };
    ProjectsComponent.prototype.clickReactGym = function () {
        window.open('http://react-gym.s3-website.eu-west-2.amazonaws.com/');
    };
    ProjectsComponent.prototype.clickReactGymRepo = function () {
        window.open('https://github.com/ElAndy94/AJGyms');
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrew/Projects/Personal-Website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map