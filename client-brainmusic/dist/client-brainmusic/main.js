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

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\n"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/alert.service */ "./src/app/shared/alert.service.ts");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



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



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "\n<app-register-form></app-register-form>\n<app-email-form></app-email-form>\n\n"

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
        this.title = 'client-brainmusic';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-form/register-form.component */ "./src/app/register-form/register-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_register_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/register.service */ "./src/app/shared/register.service.ts");
/* harmony import */ var _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./email-form/email-form.component */ "./src/app/email-form/email-form.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _shared_email_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/email.service */ "./src/app/shared/email.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_5__["RegisterFormComponent"],
                _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_9__["EmailFormComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [_shared_register_service__WEBPACK_IMPORTED_MODULE_8__["RegisterService"],
                _shared_email_service__WEBPACK_IMPORTED_MODULE_11__["EmailService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/email-form/email-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/email-form/email-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  box-sizing: border-box;\n  border: #000 solid 1px;\n  width: 40%;\n  margin-top: 10%;\n  border-radius: 10px;\n  background: rgba(225, 225, 225, 0.2);\n}\n\n.container h1 {\n  text-align: center;\n  color: #000;\n  padding: 25px 0;\n}\n\n.container .title-box {\n  margin: 15px 15px;\n}\n\n.container .title-box .fas {\n  padding-right: 5px;\n  font-size: 14px;\n}\n\n.container .title-box span {\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.container .title-box input, .container .title-box textarea {\n  padding: 5px 15px;\n  outline: none;\n  border: 1px solid #e5ebeb;\n  border-radius: 5px;\n  font-size: 14px;\n}\n\n.container .title-box input:focus, .container .title-box textarea:focus {\n  box-shadow: 0 0 0 1pt #82bcff;\n}\n\n.container .title-box .btn {\n  border: none;\n  color: #fff;\n  margin: 10px 0;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwtZm9ybS9lbWFpbC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsLWZvcm0vZW1haWwtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogIzAwMCBzb2xpZCAxcHg7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjIpO1xufVxuXG4uY29udGFpbmVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMjVweCAwO1xufVxuXG4uY29udGFpbmVyIC50aXRsZS1ib3gge1xuICBtYXJnaW46IDE1cHggMTVweDtcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtYm94IC5mYXMge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtYm94IHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29udGFpbmVyIC50aXRsZS1ib3ggaW5wdXQsIC5jb250YWluZXIgLnRpdGxlLWJveCB0ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlYmViO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtYm94IGlucHV0OmZvY3VzLCAuY29udGFpbmVyIC50aXRsZS1ib3ggdGV4dGFyZWE6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHQgIzgyYmNmZjtcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtYm94IC5idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/email-form/email-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/email-form/email-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"container\" [formGroup]=\"emailForm\" (ngSubmit)=\"onSubmit()\">\n  <h1>Reply Feedback</h1>\n  <div class=\"title-box\">\n    <label><i class=\"fas fa-user\"></i><span>Name</span></label>\n    <input type=\"text\" placeholder=\"Enter Name\" class=\"col-md-12\" formControlName=\"name\">\n    <div class=\"alert p-1\" role=\"alert\"\n         *ngIf=\"emailForm.get('name').invalid && emailForm.get('name').touched\">\n      Invalid Name!\n    </div>\n  </div>\n  <div class=\"title-box\">\n    <label><i class=\"fas fa-envelope\"></i><span>Email</span></label>\n    <input type=\"email\" placeholder=\"Enter Email\" class=\"col-md-12\" formControlName=\"email\">\n    <div class=\"alert p-1\" role=\"alert\"\n         *ngIf=\"emailForm.get('email').invalid && emailForm.get('email').touched\">\n      Invalid Email!\n    </div>\n  </div>\n  <div class=\"title-box\">\n    <label><i class=\"fas fa-comment\"></i><span>Message</span></label>\n    <textarea type=\"text\" placeholder=\"Type Your Message\" class=\"col-md-12\" wrap=\"soft\" rows=\"3\"\n              formControlName=\"feedback\"></textarea>\n    <div class=\"alert p-1\" role=\"alert\"\n         *ngIf=\"emailForm.get('feedback').invalid && emailForm.get('feedback').touched\">\n      Invalid Feedback!\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary col-md-12\" [disabled]=\"emailForm.status==='INVALID'\">Send Email</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/email-form/email-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/email-form/email-form.component.ts ***!
  \****************************************************/
/*! exports provided: EmailFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailFormComponent", function() { return EmailFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/email.service */ "./src/app/shared/email.service.ts");




var EmailFormComponent = /** @class */ (function () {
    function EmailFormComponent(fb, service) {
        this.fb = fb;
        this.service = service;
    }
    EmailFormComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    Object.defineProperty(EmailFormComponent.prototype, "f", {
        get: function () {
            return this.emailForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EmailFormComponent.prototype.resetForm = function () {
        this.emailForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            feedback: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EmailFormComponent.prototype.onSubmit = function () {
        if (this.emailForm.valid) {
            var value_1 = this.emailForm.value;
            this.service.sendMail(value_1)
                .subscribe(function (data) {
                console.log(value_1);
            }, function (error) {
                console.log(error);
            });
            this.resetForm();
        }
    };
    EmailFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-form',
            template: __webpack_require__(/*! ./email-form.component.html */ "./src/app/email-form/email-form.component.html"),
            styles: [__webpack_require__(/*! ./email-form.component.css */ "./src/app/email-form/email-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"]])
    ], EmailFormComponent);
    return EmailFormComponent;
}());



/***/ }),

/***/ "./src/app/register-form/confirm-password.validator.ts":
/*!*************************************************************!*\
  !*** ./src/app/register-form/confirm-password.validator.ts ***!
  \*************************************************************/
/*! exports provided: ConfirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function() { return ConfirmPasswordValidator; });
var ConfirmPasswordValidator = /** @class */ (function () {
    function ConfirmPasswordValidator() {
    }
    ConfirmPasswordValidator.MatchPassword = function (control) {
        var password = control.get('password').value;
        var confirmPassword = control.get('confirmPassword').value;
        if (password !== confirmPassword) {
            control.get('confirmPassword').setErrors({ ConfirmPassword: true });
        }
        else {
            return null;
            //
        }
    };
    return ConfirmPasswordValidator;
}());



/***/ }),

/***/ "./src/app/register-form/register-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-form/register-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-top: 100px !important;\n  padding-bottom: 100px !important;\n}\n\n.register-left {\n  text-align: center;\n  color: #fff;\n  padding: 30px;\n}\n\n.register-left img {\n  margin-top: 60px;\n  margin-bottom: 18px;\n  width: 80px;\n  -webkit-animation: mover 1s infinite alternate;\n          animation: mover 1s infinite alternate;\n}\n\n.register-left p {\n  padding: 20px 20px 0;\n}\n\n.register-left .btn-primary {\n  border-radius: 1.5rem;\n  border: none;\n  width: 120px;\n  background: #f8f8f8;\n  font-weight: 600;\n  color: #555;\n  margin-top: 20px;\n  padding: 10px;\n}\n\n.register-left .btn-primary:hover {\n  background: #CFD5D5;\n}\n\n.register-right {\n  border: none;\n  background: #f8f8f8;\n  border-top-left-radius: 10% 50%;\n  border-bottom-left-radius: 10% 50%;\n  padding: 50px;\n}\n\n.register-right h2 {\n  text-align: center;\n  margin-bottom: 10px;\n  color: #555;\n}\n\n.register-form {\n  padding: 30px;\n}\n\n.register-right .btn-primary {\n  float: right;\n  border-radius: 1.5rem;\n  border: none;\n  width: 120px;\n  background: #ff9800;\n  font-weight: 600;\n  color: #fff;\n  margin-top: 20px;\n  padding: 10px;\n}\n\n.register-right .btn-primary:hover {\n  background: #ff5722;\n}\n\n@-webkit-keyframes mover {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  0% {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n\n@keyframes mover {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  0% {\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n\n.alert {\n  font-size: 12px;\n  font-style: italic;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw4Q0FBc0M7VUFBdEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0VBQzlCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEI7RUFDOUI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWdpc3Rlci1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLnJlZ2lzdGVyLWxlZnQgaW1nIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4ucmVnaXN0ZXItbGVmdCBwIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDA7XG59XG5cbi5yZWdpc3Rlci1sZWZ0IC5idG4tcHJpbWFyeSB7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNTU1O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucmVnaXN0ZXItbGVmdCAuYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjQ0ZENUQ1O1xufVxuXG4ucmVnaXN0ZXItcmlnaHQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5yZWdpc3Rlci1yaWdodCBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5yZWdpc3Rlci1mb3JtIHtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLnJlZ2lzdGVyLXJpZ2h0IC5idG4tcHJpbWFyeSB7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmOTgwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5yZWdpc3Rlci1yaWdodCAuYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY1NzIyO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxufVxuXG4uYWxlcnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/register-form/register-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/register-form/register-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-alert></app-alert>\n<div class=\"register-background\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset=md-1\">\n        <div class=\"row\">\n\n          <div class=\"col-md-5 register-left\">\n            <img src=\"assets/horsemen.png\" style=\"width: 200px; height: 200px\">\n            <h3>Join us</h3>\n            <p>If music could help me feel a little hope and a little less pain, maybe it could do the some for\n              others</p>\n            <button type=\"button\" class=\"btn btn-primary\">About us</button>\n          </div>\n\n          <div class=\"col-md-7 register-right\">\n            <h2>Register Here</h2>\n            <form class=\"register-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\">\n                <div class=\"alert p-1\" role=\"alert\"\n                     *ngIf=\"registerForm.get('username').invalid && registerForm.get('username').touched\">\n                  Invalid Username!\n                </div>\n              </div>\n\n\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n                <div class=\"alert p-1\" role=\"alert\"\n                     *ngIf=\"registerForm.get('password').touched && registerForm.get('password').invalid\">\n                  Password is required and Password must be at least 6 characters\n                </div>\n\n              </div>\n\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\"\n                       formControlName=\"confirmPassword\">\n                <div class=\"alert p-1\" role=\"alert\"\n                     *ngIf=\"registerForm.get('confirmPassword').errors && registerForm.get('confirmPassword').errors.ConfirmPassword\n&& registerForm.get('confirmPassword').touched\">\n                  Password is not match\n                </div>\n              </div>\n\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <div class=\"form-check form-check-inline col-form-label pl-3 pt-0\">\n                    <input class=\"form-check-input\" type=\"radio\" value=\"1\" formControlName=\"gender\">\n                    <label class=\"form-check-label pt-1\">Male</label>\n                  </div>\n                  <div class=\"form-check form-check-inline col-form-label pt-0\">\n                    <input class=\"form-check-input\" type=\"radio\" value=\"2\" formControlName=\"gender\">\n                    <label class=\"form-check-label pt-1\">Female</label>\n                  </div>\n                  <div class=\"form-check form-check-inline col-form-label pt-0\">\n                    <input class=\"form-check-input\" type=\"radio\" value=\"3\" formControlName=\"gender\">\n                    <label class=\"form-check-label pt-1\">Other</label>\n                  </div>\n                </div>\n              </fieldset>\n\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n                <div class=\"alert p-1\" role=\"alert\"\n                     *ngIf=\"registerForm.get('email').invalid && registerForm.get('email').touched\">\n                  Invalid Email!\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your Phone\" formControlName=\"phonenumber\">\n                <div class=\"alert p-1\" role=\"alert\"\n                     *ngIf=\"registerForm.get('phonenumber').invalid && registerForm.get('phonenumber').touched\">\n                  <span *ngIf=\"registerForm.get('phonenumber').hasError('required')\">Phone is required</span>\n                  <span\n                    *ngIf=\"registerForm.get('phonenumber').hasError('pattern')\">Phone must start with +84 followed by 9 or 10 digits.</span>\n                </div>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"registerForm.status==='INVALID'\">Register\n              </button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/register-form/register-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-form/register-form.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _confirm_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-password.validator */ "./src/app/register-form/confirm-password.validator.ts");
/* harmony import */ var _shared_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/register.service */ "./src/app/shared/register.service.ts");





var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(fb, service) {
        this.fb = fb;
        this.service = service;
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phonenumber: ['+84', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\+84\d{9,10}$/)]]
        }, {
            validator: _confirm_password_validator__WEBPACK_IMPORTED_MODULE_3__["ConfirmPasswordValidator"].MatchPassword
        });
    };
    Object.defineProperty(RegisterFormComponent.prototype, "f", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterFormComponent.prototype.onSubmit = function () {
        if (this.registerForm.valid) {
            var value_1 = this.registerForm.value;
            this.service.createUser(value_1)
                .subscribe(function (data) {
                console.log(value_1);
            }, function (error) {
                console.log(error);
            });
        }
    };
    RegisterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__(/*! ./register-form.component.html */ "./src/app/register-form/register-form.component.html"),
            styles: [__webpack_require__(/*! ./register-form.component.css */ "./src/app/register-form/register-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/alert.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/alert.service.ts ***!
  \*****************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/shared/email.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/email.service.ts ***!
  \*****************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
        this.API_URL = 'http://178.128.97.6/email/email';
    }
    EmailService.prototype.sendMail = function (feedback) {
        return this.http.post(this.API_URL, feedback);
    };
    EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/shared/register.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/register.service.ts ***!
  \********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.API_URL = 'http://178.128.97.6/register/register';
    }
    //
    RegisterService.prototype.createUser = function (user) {
        return this.http.post(this.API_URL, user);
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hjjk/Desktop/TestProject/Brain-Music/client-brainmusic/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map