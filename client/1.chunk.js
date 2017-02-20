webpackJsonp([1,8],{

/***/ 1176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__integration_routing_module__ = __webpack_require__(1184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_integration_edit_component__ = __webpack_require__(1183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_integration_list_component__ = __webpack_require__(1186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_integration_card_component__ = __webpack_require__(1180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__detail_integration_detail_component__ = __webpack_require__(1182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__integration_component__ = __webpack_require__(1185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_integration_edit_main_list_integration_edit_main_list_component__ = __webpack_require__(1181);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationModule", function() { return IntegrationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var IntegrationModule = (function () {
    function IntegrationModule() {
    }
    IntegrationModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__integration_routing_module__["a" /* IntegrationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputSwitchModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__card_integration_card_component__["a" /* IntegrationCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__detail_integration_detail_component__["a" /* IntegrationDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_5__edit_integration_edit_component__["a" /* IntegrationEditComponent */],
                __WEBPACK_IMPORTED_MODULE_6__list_integration_list_component__["a" /* IntegrationListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__integration_component__["a" /* IntegrationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__containers_integration_edit_main_list_integration_edit_main_list_component__["a" /* IntegrationEditMainListComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_10__containers_integration_edit_main_list_integration_edit_main_list_component__["a" /* IntegrationEditMainListComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], IntegrationModule);
    return IntegrationModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/integration.module.js.map

/***/ }),

/***/ 1180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntegrationCardComponent = (function () {
    function IntegrationCardComponent() {
    }
    IntegrationCardComponent.prototype.ngOnInit = function () {
    };
    IntegrationCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-integration-card',
            template: __webpack_require__(1193),
            styles: [__webpack_require__(1187)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], IntegrationCardComponent);
    return IntegrationCardComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/integration-card.component.js.map

/***/ }),

/***/ 1181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_form_builder_service__ = __webpack_require__(683);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationEditMainListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntegrationEditMainListComponent = (function () {
    function IntegrationEditMainListComponent(formBuilderService) {
        this.formBuilderService = formBuilderService;
    }
    IntegrationEditMainListComponent.prototype.addIntegration = function () {
        var integrationsControl = this.form.get('integrations');
        integrationsControl.push(this.formBuilderService.initIntegrationForm());
    };
    IntegrationEditMainListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], IntegrationEditMainListComponent.prototype, "form", void 0);
    IntegrationEditMainListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-integration-edit-main-list',
            template: __webpack_require__(1194),
            styles: [__webpack_require__(1188)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_form_builder_service__["a" /* FormBuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_form_builder_service__["a" /* FormBuilderService */]) === 'function' && _b) || Object])
    ], IntegrationEditMainListComponent);
    return IntegrationEditMainListComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/integration-edit-main-list.component.js.map

/***/ }),

/***/ 1182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntegrationDetailComponent = (function () {
    function IntegrationDetailComponent() {
    }
    IntegrationDetailComponent.prototype.ngOnInit = function () {
    };
    IntegrationDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-integration-detail',
            template: __webpack_require__(1195),
            styles: [__webpack_require__(1189)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], IntegrationDetailComponent);
    return IntegrationDetailComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/integration-detail.component.js.map

/***/ }),

/***/ 1183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntegrationEditComponent = (function () {
    function IntegrationEditComponent() {
    }
    IntegrationEditComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], IntegrationEditComponent.prototype, "form", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], IntegrationEditComponent.prototype, "inFlow", void 0);
    IntegrationEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-integration-edit',
            template: __webpack_require__(1196),
            styles: [__webpack_require__(1190)]
        }), 
        __metadata('design:paramtypes', [])
    ], IntegrationEditComponent);
    return IntegrationEditComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/integration-edit.component.js.map

/***/ }),

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var routes = [];
var IntegrationRoutingModule = (function () {
    function IntegrationRoutingModule() {
    }
    IntegrationRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], IntegrationRoutingModule);
    return IntegrationRoutingModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/integration-routing.module.js.map

/***/ }),

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntegrationComponent = (function () {
    function IntegrationComponent() {
    }
    IntegrationComponent.prototype.ngOnInit = function () {
    };
    IntegrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-integration',
            template: __webpack_require__(1197),
            styles: [__webpack_require__(1191)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], IntegrationComponent);
    return IntegrationComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/integration.component.js.map

/***/ }),

/***/ 1186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntegrationListComponent = (function () {
    function IntegrationListComponent() {
    }
    IntegrationListComponent.prototype.ngOnInit = function () {
    };
    IntegrationListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-integration-list',
            template: __webpack_require__(1198),
            styles: [__webpack_require__(1192)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], IntegrationListComponent);
    return IntegrationListComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/integration-list.component.js.map

/***/ }),

/***/ 1187:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1188:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1189:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1190:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1191:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1192:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1193:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  integration-card works!\r\n</p>\r\n"

/***/ }),

/***/ 1194:
/***/ (function(module, exports) {

module.exports = "  <button class=\"btn btn-secondary\" (click)=\"addIntegration()\"><i class=\"fa fa-plus\"></i> Add Integration</button>\n  <form [formGroup]=\"form\" novalidate (ngSubmit)=\"onSubmit(form.value)\" class=\"add-margin-top\">\n    <div formArrayName=\"integrations\">\n      <div *ngFor=\"let integrationForm of form.get('integrations').controls; let i=index\" class=\"card\">\n        <div class=\"card-block\">\n          <h3 class=\"card-title\">{{integrationForm.get('name').value}}</h3>\n          <app-integration-edit [inFlow]=\"true\" [form]=\"integrationForm\"></app-integration-edit>\n        </div>\n      </div>\n    </div>\n  </form>\n   "

/***/ }),

/***/ 1195:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  integration-detail works!\r\n</p>\r\n"

/***/ }),

/***/ 1196:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" novalidate (ngSubmit)=\"onSubmit(form.value)\">\r\n    <div class=\"form-group\" [class.has-danger]=\"form.controls.name.invalid\">\r\n        <label class=\"form-control-label\" for=\"name\">Name</label>\r\n        <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\">\r\n        <div class=\"form-control-feedback\" *ngIf=\"form.controls.name.invalid\">Name is Required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"form-control-label\" for=\"description\">Description</label>\r\n        <textarea type=\"text\" name=\"description\" class=\"form-control\" placeholder=\"Description\" formControlName=\"description\"></textarea>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7\">\r\n          <div class=\"form-group\" [class.has-danger]=\"form.controls.source_system.invalid\">\r\n              <label class=\"form-control-label\" for=\"source_system\">Source System</label>\r\n              <input type=\"text\" name=\"source_system\" class=\"form-control\" placeholder=\"Source System\" formControlName=\"source_system\">\r\n              <div class=\"form-control-feedback\" *ngIf=\"form.controls.source_system.invalid\">Source System is Required</div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n          <div class=\"form-group\">\r\n              <label class=\"form-control-label\" for=\"source_system_release\">Source System Release</label>\r\n              <input type=\"text\" name=\"source_system_release\" class=\"form-control\" placeholder=\"Source System Release\" formControlName=\"source_system_release\">\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7\">\r\n        <div class=\"form-group\" [class.has-danger]=\"form.controls.target_system.invalid\">\r\n            <label class=\"form-control-label\" for=\"target_system\">Target System</label>\r\n            <input type=\"text\" name=\"target_system\" class=\"form-control\" placeholder=\"Target System\" formControlName=\"target_system\">\r\n            <div class=\"form-control-feedback\" *ngIf=\"form.controls.target_system.invalid\">Target System is Required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n           <div class=\"form-group\">\r\n              <label class=\"form-control-label\" for=\"target_system_release\">Target System Release</label>\r\n              <input type=\"text\" name=\"target_system_release\" class=\"form-control\" placeholder=\"Target System Release\" formControlName=\"target_system_release\">\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Effective Date</label>\r\n      <p-calendar formControlName=\"effective_date\"></p-calendar>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"active\">Active</label>\r\n        <div>\r\n            <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" formControlName=\"active\"></p-inputSwitch>\r\n        </div>           \r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"active\">Hidden</label>\r\n        <div>\r\n            <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" formControlName=\"hidden\"></p-inputSwitch>\r\n        </div>           \r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" *ngIf=\"!inFlow\"><i class=\"fa fa-plus\"></i> Save</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ 1197:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  integration works!\r\n</p>\r\n"

/***/ }),

/***/ 1198:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  integration-list works!\r\n</p>\r\n"

/***/ })

});
//# sourceMappingURL=1.bundle.map