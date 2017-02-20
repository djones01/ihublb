webpackJsonp([0,1,8],{

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

/***/ 1179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_routing_module__ = __webpack_require__(1221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__integration_integration_module__ = __webpack_require__(1176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_project_edit_component__ = __webpack_require__(1219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_project_list_component__ = __webpack_require__(1220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__card_project_card_component__ = __webpack_require__(1213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__detail_project_detail_component__ = __webpack_require__(1218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__containers_project_edit_main_project_edit_main_component__ = __webpack_require__(1199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_project_list_main_project_list_main_component__ = __webpack_require__(1217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__project_component__ = __webpack_require__(1200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__containers_project_edit_integrations_project_edit_integrations_component__ = __webpack_require__(1214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__containers_project_edit_users_project_edit_users_component__ = __webpack_require__(1216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__containers_project_edit_overview_project_edit_overview_component__ = __webpack_require__(1215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ProjectModule = (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__project_routing_module__["a" /* ProjectRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__integration_integration_module__["IntegrationModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["StepsModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TieredMenuModule"],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__card_project_card_component__["a" /* ProjectCardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__detail_project_detail_component__["a" /* ProjectDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__edit_project_edit_component__["a" /* ProjectEditComponent */],
                __WEBPACK_IMPORTED_MODULE_8__list_project_list_component__["a" /* ProjectListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_11__containers_project_edit_main_project_edit_main_component__["a" /* ProjectEditMainComponent */],
                __WEBPACK_IMPORTED_MODULE_12__containers_project_list_main_project_list_main_component__["a" /* ProjectListMainComponent */],
                __WEBPACK_IMPORTED_MODULE_14__containers_project_edit_integrations_project_edit_integrations_component__["a" /* ProjectEditIntegrationsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__containers_project_edit_users_project_edit_users_component__["a" /* ProjectEditUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_16__containers_project_edit_overview_project_edit_overview_component__["a" /* ProjectEditOverviewComponent */]
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectModule);
    return ProjectModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/project.module.js.map

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

/***/ }),

/***/ 1199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_form_builder_service__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_service__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectEditMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectEditMainComponent = (function () {
    function ProjectEditMainComponent(fbService, router, projectService) {
        this.fbService = fbService;
        this.router = router;
        this.projectService = projectService;
        this.activeStep = 0;
    }
    ProjectEditMainComponent.prototype.nextStep = function () {
        this.activeStep++;
    };
    ProjectEditMainComponent.prototype.previousStep = function () {
        this.activeStep--;
    };
    ProjectEditMainComponent.prototype.saveProject = function (event) {
        this.projectService.add(event);
        this.router.navigateByUrl('/pages/projects');
    };
    ProjectEditMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            { label: 'Project Details' },
            { label: 'Integrations' },
            { label: 'Project Users' },
            { label: 'Review' }
        ];
        this.projectService.editProject.subscribe(function (editProject) {
            _this.projectForm = _this.fbService.initProjectForm(editProject);
        });
    };
    ProjectEditMainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-edit-main',
            template: __webpack_require__(1254),
            styles: [__webpack_require__(1233)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_form_builder_service__["a" /* FormBuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_form_builder_service__["a" /* FormBuilderService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__project_service__["a" /* ProjectService */]) === 'function' && _c) || Object])
    ], ProjectEditMainComponent);
    return ProjectEditMainComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/project-edit-main.component.js.map

/***/ }),

/***/ 1200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(1261),
            styles: [__webpack_require__(1238)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectComponent);
    return ProjectComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/project.component.js.map

/***/ }),

/***/ 1213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectCardComponent = (function () {
    function ProjectCardComponent() {
    }
    ProjectCardComponent.prototype.ngOnInit = function () {
    };
    ProjectCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-card',
            template: __webpack_require__(1252),
            styles: [__webpack_require__(1232)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectCardComponent);
    return ProjectCardComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/project-card.component.js.map

/***/ }),

/***/ 1214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectEditIntegrationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectEditIntegrationsComponent = (function () {
    function ProjectEditIntegrationsComponent() {
    }
    ProjectEditIntegrationsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], ProjectEditIntegrationsComponent.prototype, "form", void 0);
    ProjectEditIntegrationsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-edit-integrations',
            template: __webpack_require__(1253),
            styles: [__webpack_require__(1239)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectEditIntegrationsComponent);
    return ProjectEditIntegrationsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/project-edit-integrations.component.js.map

/***/ }),

/***/ 1215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectEditOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectEditOverviewComponent = (function () {
    function ProjectEditOverviewComponent() {
    }
    ProjectEditOverviewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], ProjectEditOverviewComponent.prototype, "form", void 0);
    ProjectEditOverviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-edit-overview',
            template: __webpack_require__(1255),
            styles: [__webpack_require__(1240)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectEditOverviewComponent);
    return ProjectEditOverviewComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/project-edit-overview.component.js.map

/***/ }),

/***/ 1216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectEditUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectEditUsersComponent = (function () {
    function ProjectEditUsersComponent() {
    }
    ProjectEditUsersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], ProjectEditUsersComponent.prototype, "form", void 0);
    ProjectEditUsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-edit-users',
            template: __webpack_require__(1256),
            styles: [__webpack_require__(1241)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectEditUsersComponent);
    return ProjectEditUsersComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/project-edit-users.component.js.map

/***/ }),

/***/ 1217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_service__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectListMainComponent = (function () {
    function ProjectListMainComponent(router, projectService) {
        this.router = router;
        this.projectService = projectService;
    }
    ProjectListMainComponent.prototype.onSelectedItem = function (event) {
        this.selectedItem = event;
    };
    ProjectListMainComponent.prototype.editProject = function () {
        this.projectService.setEditProject(this.selectedItem);
        this.router.navigateByUrl('/pages/projects/edit');
    };
    ProjectListMainComponent.prototype.ngOnInit = function () {
        this.projects$ = this.projectService.projects;
    };
    ProjectListMainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-list-main',
            template: __webpack_require__(1257),
            styles: [__webpack_require__(1234)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */]) === 'function' && _b) || Object])
    ], ProjectListMainComponent);
    return ProjectListMainComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/project-list-main.component.js.map

/***/ }),

/***/ 1218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectDetailComponent = (function () {
    function ProjectDetailComponent() {
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
    };
    ProjectDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__(1258),
            styles: [__webpack_require__(1235)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/project-detail.component.js.map

/***/ }),

/***/ 1219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectEditComponent = (function () {
    function ProjectEditComponent() {
    }
    ProjectEditComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], ProjectEditComponent.prototype, "form", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], ProjectEditComponent.prototype, "inFlow", void 0);
    ProjectEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-edit',
            template: __webpack_require__(1259),
            styles: [__webpack_require__(1236)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectEditComponent);
    return ProjectEditComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/project-edit.component.js.map

/***/ }),

/***/ 1220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectListComponent = (function () {
    function ProjectListComponent() {
        this.selectedItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.menuAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.types = [
            { label: 'All Types', value: null },
            { label: 'Upgrade', value: 'Upgrade' },
            { label: 'Enhancement', value: 'Enhancement' },
            { label: 'New Installation', value: 'New Installation' },
            { label: 'Retrofit', value: 'Retrofit' }
        ];
    }
    ProjectListComponent.prototype.onRowSelect = function (event) {
        this.selectedItem.emit(event.data);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ProjectListComponent.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], ProjectListComponent.prototype, "canSelect", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ProjectListComponent.prototype, "selectedItem", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ProjectListComponent.prototype, "menuAction", void 0);
    ProjectListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-list',
            template: __webpack_require__(1260),
            styles: [__webpack_require__(1237)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/project-list.component.js.map

/***/ }),

/***/ 1221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_project_edit_main_project_edit_main_component__ = __webpack_require__(1199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_component__ = __webpack_require__(1200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__project_component__["a" /* ProjectComponent */]
    },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_2__containers_project_edit_main_project_edit_main_component__["a" /* ProjectEditMainComponent */] }
];
var ProjectRoutingModule = (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihublb/src/project-routing.module.js.map

/***/ }),

/***/ 1232:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1233:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1234:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1235:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1236:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1237:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1238:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1239:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1240:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1241:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1252:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-block\">\r\n    <h3 class=\"card-title\">{{data.name}}</h3>\r\n    <h5>Description</h5>\r\n    <p class=\"card-text\">{{data.description}}</p>\r\n    <h5>Type</h5>\r\n    <p class=\"card-text\">{{data.type}}</p>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"selectItem()\">View Projects</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 1253:
/***/ (function(module, exports) {

module.exports = "<h5>Integrations</h5>\r\n<p>\r\n  After adding integrations to a project, they can be edited later in order to add conversions.\r\n</p>\r\n<hr>\r\n<app-integration-edit-main-list [form]=\"form\"></app-integration-edit-main-list>\r\n\r\n\r\n"

/***/ }),

/***/ 1254:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h4>Add New Project</h4>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <button type=\"button\" class=\"btn btn-secondary pull-right\" routerLink=\"/pages/projects\">Back to Projects Overview</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <app-project-edit [form]=\"projectForm\" [inFlow]=\"true\" *ngIf=\"activeStep == 0\"></app-project-edit>    \r\n        <app-project-edit-integrations *ngIf=\"activeStep == 1\" [form]=\"projectForm\"></app-project-edit-integrations>\r\n        <app-project-edit-users *ngIf=\"activeStep == 2\" [form]=\"projectForm\"></app-project-edit-users>\r\n        <app-project-edit-overview *ngIf=\"activeStep == 3\" [form]=\"projectForm\"></app-project-edit-overview>\r\n    </div>            \r\n    <p-steps [model]=\"items\" [readonly]=\"false\" [(activeIndex)]=\"activeStep\"></p-steps>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"previousStep()\" *ngIf=\"activeStep != 0\"><i class=\"fa fa-arrow-left\"></i> Back</button>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"nextStep()\" *ngIf=\"activeStep != 3\">Next <i class=\"fa fa-arrow-right\"></i></button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveProject()\" *ngIf=\"activeStep == 3\" [disabled]=\"projectForm.invalid\"><i class=\"fa fa-save\"></i> Save Project</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 1255:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  project-edit-overview works!\r\n</p>\r\n"

/***/ }),

/***/ 1256:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  project-edit-users works!\r\n</p>\r\n"

/***/ }),

/***/ 1257:
/***/ (function(module, exports) {

module.exports = "<h4>Existing Projects</h4>\r\n<hr>\r\n<button class=\"btn btn-secondary\" (click)=\"editProject()\" [disabled]=\"!selectedItem\"><i class=\"fa fa-edit\"></i> Edit Project</button>\r\n<div ngbDropdown class=\"d-inline-block\">\r\n    <button class=\"btn btn-secondary\" id=\"dropdownMenu1\" [disabled]=\"!selectedItem\" ngbDropdownToggle>Add To Project</button>\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n    <button class=\"dropdown-item\" (click)=\"addUsers()\"><i class=\"fa fa-user\"></i>Users</button>\r\n    <button class=\"dropdown-item\" (click)=\"addIntegrations()\"><i class=\"fa fa-plug\"></i>Integrations</button>\r\n    </div>\r\n</div>\r\n<div ngbDropdown class=\"d-inline-block\">\r\n    <button class=\"btn btn-secondary\" id=\"dropdownMenu2\" [disabled]=\"!selectedItem\" ngbDropdownToggle>Delete</button>\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n    <button class=\"dropdown-item\" (click)=\"addUsers()\"><i class=\"fa fa-user\"></i>Users</button>\r\n    <button class=\"dropdown-item\" (click)=\"addIntegrations()\"><i class=\"fa fa-plug\"></i>Integrations</button>\r\n    </div>\r\n</div>\r\n<div class=\"add-margin-top\">\r\n    <app-project-list [data]=\"projects$ | async\" [canSelect]=\"true\" (selectedItem)=\"onSelectedItem($event)\"></app-project-list>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 1258:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  project-detail works!\r\n</p>\r\n"

/***/ }),

/***/ 1259:
/***/ (function(module, exports) {

module.exports = "<h5>Project Properties</h5>\r\n<hr>\r\n<form [formGroup]=\"form\" novalidate (ngSubmit)=\"onSubmit(form.value)\">\r\n    <div class=\"form-group\" [class.has-danger]=\"form.controls.name.invalid\">\r\n        <label class=\"form-control-label\" for=\"name\">Name</label>\r\n        <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\">\r\n        <div class=\"form-control-feedback\" *ngIf=\"form.controls.name.invalid\">Name is Required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"form-control-label\" for=\"description\">Description</label>\r\n        <textarea type=\"text\" name=\"description\" class=\"form-control\" placeholder=\"Description\" formControlName=\"description\"></textarea>\r\n    </div>\r\n    <div class=\"form-group\" [class.has-danger]=\"form.controls.type.invalid\">\r\n        <label class=\"form-control-label\" for=\"type\">Type</label>\r\n        <select name=\"type\" class=\"form-control\" formControlName=\"type\">\r\n            <option value=\"\" selected disabled>Select Type</option>\r\n            <option value=\"New Work\">New Work</option>\r\n            <option value=\"Enhancement\">Enhancement</option>\r\n            <option value=\"Upgrade\">Upgrade</option>\r\n            <option value=\"Retrofit\">Retrofit</option>\r\n        </select>\r\n        <div class=\"form-control-feedback\" *ngIf=\"form.controls.type.invalid\">Type is Required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" *ngIf=\"!inFlow\"><i class=\"fa fa-plus\"></i> Save</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ 1260:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n    <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n</div>\r\n<p-dataTable [value]=\"data\" [rows]=\"10\" [paginator]=\"true\" [globalFilter]=\"gb\" resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\"\r\n                 [stacked]=\"stacked\"\r\n                 (onRowSelect)=\"onRowSelect($event)\" #dt>\r\n    <p-header>List of Projects</p-header>\r\n    <p-column [style]=\"{'width':'38px'}\" selectionMode=\"single\" *ngIf=\"canSelect\"></p-column>\r\n    <p-column field=\"name\" header=\"Name\" [filter]=\"true\" filterPlaceholder=\"Search\"></p-column>\r\n    <p-column field=\"description\" header=\"Description\" [filter]=\"true\" filterPlaceholder=\"Search\"></p-column>\r\n    <p-column field=\"type\" header=\"Type\" [filter]=\"true\" [style]=\"{'overflow':'visible'}\" filterMatchMode=\"equals\">\r\n        <template pTemplate=\"filter\" let-col>\r\n            <p-dropdown [options]=\"types\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\"></p-dropdown>\r\n        </template>\r\n    </p-column>\r\n</p-dataTable>"

/***/ }),

/***/ 1261:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h4>Projects Overview</h4>\r\n  <hr>\r\n  <div class=\"card\">\r\n    <div class=\"card-block\">\r\n      <h3 class=\"card-title\">Add New Project</h3>\r\n      <p class=\"card-text\">Projects contain a set of integrations and assigned users.</p>\r\n      <a class=\"btn btn-secondary\" routerLink=\"/pages/projects/edit\" role=\"button\">Add Project</a>\r\n    </div>\r\n  </div>\r\n  <app-project-list-main></app-project-list-main>\r\n</div>\r\n"

/***/ })

});
//# sourceMappingURL=0.bundle.map