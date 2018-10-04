(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-layout-admin-layout-module"],{

/***/ "./src/app/admin-dashboard/add-group-dialog.html":
/*!*******************************************************!*\
  !*** ./src/app/admin-dashboard/add-group-dialog.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Select Group</h1>\n<div mat-dialog-content>\n    <mat-form-field>\n    <mat-select [(ngModel)]=\"choosenEmoji\" (ngModelChange)=\"selectedOption()\">\n        <mat-option *ngFor=\"let emoji of emojis\" [value]=\"emoji\">\n            {{ emoji }}\n        </mat-option>\n    </mat-select>\n    </mat-form-field>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button (click)=\"confirmSelection()\" color=\"primary\">Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/admin-dashboard/add-org-dialog.html":
/*!*****************************************************!*\
  !*** ./src/app/admin-dashboard/add-org-dialog.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Select Org</h1>\n<div mat-dialog-content>\n    <mat-form-field>\n    <mat-select [(ngModel)]=\"choosenEmoji\">\n      <mat-option *ngFor=\"let emoji of emojis\" [value]=\"emoji\">\n        {{ emoji }}\n      </mat-option>\n    </mat-select>\n    </mat-form-field>\n</div>\n\n<div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button (click)=\"confirmSelection()\" color=\"primary\">Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>Admin Dashboard</h1>\n    <h2>Inbox - Users waiting to be Onboarded</h2>\n    <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  \n    <ng-container matColumnDef=\"NUID\">\n      <mat-header-cell *matHeaderCellDef> NUID </mat-header-cell>\n      <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.nuid}} </mat-cell>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"Name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.name}} </mat-cell>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"Org\">\n      <mat-header-cell *matHeaderCellDef> Org </mat-header-cell>\n      <mat-cell *matCellDef=\"let mockdata, let i = index\"> \n          <!-- new user -->\n          <ng-template [ngIf]=\"mockdata.newUser\">\n            <button *ngIf=\"noOrgSelected\" mat-button color=\"primary\" (click)=\"openAddOrgDialog()\">Add Org</button>\n            <div *ngIf=\"!noOrgSelected\"> {{selectedOrg}} </div>\n            <!-- <div *ngIf=\"!noOrgSelected\"> {{mockdata[i].org}} </div> -->\n          </ng-template>\n          <!-- <button *ngIf=\"mockdata.newUser\" mat-button color=\"primary\" (click)=\"openAddOrgDialog()\">Add Org</button> -->\n          <!-- <div *ngIf=\"!noOrgSelected\"> {{selectedOrg}} </div> -->\n\n          <!-- not new user -->\n          <div *ngIf=\"!mockdata.newUser\"> {{mockdata.org}} </div>\n          <!-- <div *ngIf=\"!noOrgSelected && !mockdata.newUser\"> {{mockdata.org}} </div> -->\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Group\">\n      <mat-header-cell *matHeaderCellDef> Group </mat-header-cell>\n      <mat-cell *matCellDef=\"let mockdata\"> \n          <!-- new user -->\n          <ng-template [ngIf]=\"mockdata.newUser\">\n            <button *ngIf=\"noGroupSelected\" mat-button color=\"primary\" (click)=\"openAddGroupDialog()\">Add Group</button>\n            <div *ngIf=\"!noGroupSelected\"> {{selectedGroup}} </div>\n          </ng-template>\n\n          <!-- not new user -->\n          <div *ngIf=\"!mockdata.newUser\"> {{mockdata.group}} </div>\n\n        <!-- <button *ngIf=\"noGroupSelected && mockdata.newUser\" mat-button color=\"primary\" (click)=\"openAddGroupDialog()\">Add Group</button>\n        <div *ngIf=\"!noGroupSelected\"> {{selectedGroup}} </div> -->\n      </mat-cell>\n    </ng-container>\n  \n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  \n    </mat-table>\n\n<button mat-raised-button class=\"org-setup\" routerLink=\"/org-setup\"> Org Setup </button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2 {\n  text-align: center; }\n\nmat-table {\n  width: 80%;\n  margin-top: 80px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.org-setup {\n  margin-top: 30px;\n  margin-left: 120px;\n  margin-right: auto;\n  font-size: 20px;\n  font-style: none; }\n\n.cdk-global-overlay-wrapper, .cdk-overlay-container {\n  z-index: 99999 !important; }\n"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var MOCK_DATA = [
    { nuid: "X12345", name: 'Anjana', org: '', group: '', newUser: true },
    { nuid: "Y67890", name: 'Sonali', org: 'CTO', group: 'STS', newUser: false },
    { nuid: "Z11235", name: 'Chandra', org: '', group: '', newUser: true }
];
var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(dialog) {
        this.dialog = dialog;
        this.noOrgSelected = true;
        this.noGroupSelected = true;
        this.index = 0;
        this.displayedColumns = ['NUID', 'Name', 'Org', 'Group'];
        this.dataSource = MOCK_DATA;
    }
    AdminDashboardComponent.prototype.openAddOrgDialog = function () {
        var _this = this;
        var addOrgDialogRef = this.dialog.open(AddOrgDialog);
        addOrgDialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            _this.selectedOrg = "" + result;
            _this.noOrgSelected = false;
            MOCK_DATA[_this.index].org = _this.selectedOrg;
        });
    };
    AdminDashboardComponent.prototype.openAddGroupDialog = function () {
        var _this = this;
        var addGroupDialogRef = this.dialog.open(AddGroupDialog);
        addGroupDialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            _this.selectedGroup = "" + result;
            _this.noGroupSelected = false;
        });
    };
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.scss */ "./src/app/admin-dashboard/admin-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());
exports.AdminDashboardComponent = AdminDashboardComponent;
var AddGroupDialog = /** @class */ (function () {
    function AddGroupDialog(addGroupDialogRef, data) {
        this.addGroupDialogRef = addGroupDialogRef;
        this.data = data;
        this.emojis = ['🐼', '💪', '🐷', '🤖', '👽', '🐥'];
    }
    AddGroupDialog.prototype.selectedOption = function () {
        console.log("selected " + this.choosenEmoji);
    };
    AddGroupDialog.prototype.onNoClick = function () {
        this.addGroupDialogRef.close();
    };
    AddGroupDialog.prototype.confirmSelection = function () {
        this.addGroupDialogRef.close(this.choosenEmoji);
    };
    AddGroupDialog = __decorate([
        core_1.Component({
            selector: 'add-group-dialog',
            template: __webpack_require__(/*! ./add-group-dialog.html */ "./src/app/admin-dashboard/add-group-dialog.html"),
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], AddGroupDialog);
    return AddGroupDialog;
}());
exports.AddGroupDialog = AddGroupDialog;
var AddOrgDialog = /** @class */ (function () {
    function AddOrgDialog(addOrgDialogRef, data) {
        this.addOrgDialogRef = addOrgDialogRef;
        this.data = data;
        this.emojis = ['🐥', '👽', '🐼', '💪', '🐷', '🤖'];
    }
    AddOrgDialog.prototype.selectedOption = function () {
        console.log("selected " + this.choosenEmoji);
    };
    AddOrgDialog.prototype.onNoClick = function () {
        this.addOrgDialogRef.close();
    };
    AddOrgDialog.prototype.confirmSelection = function () {
        this.addOrgDialogRef.close(this.choosenEmoji);
    };
    AddOrgDialog = __decorate([
        core_1.Component({
            selector: 'add-org-dialog',
            template: __webpack_require__(/*! ./add-org-dialog.html */ "./src/app/admin-dashboard/add-org-dialog.html"),
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], AddOrgDialog);
    return AddOrgDialog;
}());
exports.AddOrgDialog = AddOrgDialog;


/***/ }),

/***/ "./src/app/admin-layout/admin-layout.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin-layout/admin-layout.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var admin_layout_routing_1 = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/admin-layout/admin-layout.routing.ts");
// import { LoginComponent } from '../login/login.component';
var dashboard_component_1 = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var iaas_component_1 = __webpack_require__(/*! ../iaas/iaas.component */ "./src/app/iaas/iaas.component.ts");
var item_component_1 = __webpack_require__(/*! ../iaas/tshirt/item.component */ "./src/app/iaas/tshirt/item.component.ts");
var create_vm_component_1 = __webpack_require__(/*! ../iaas/create-vm/create-vm.component */ "./src/app/iaas/create-vm/create-vm.component.ts");
var dbaas_component_1 = __webpack_require__(/*! ../dbaas/dbaas.component */ "./src/app/dbaas/dbaas.component.ts");
var lbaas_component_1 = __webpack_require__(/*! ../lbaas/lbaas.component */ "./src/app/lbaas/lbaas.component.ts");
var admin_dashboard_component_1 = __webpack_require__(/*! ../admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
var org_setup_component_1 = __webpack_require__(/*! ../org-setup/org-setup.component */ "./src/app/org-setup/org-setup.component.ts");
// import { OnBoardUserComponent } from '../on-board-user/on-board-user.component';
var new_org_component_1 = __webpack_require__(/*! ../new-org/new-org.component */ "./src/app/new-org/new-org.component.ts");
var app_module_1 = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
// import { MatTabsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSidenavModule} from '@angular/material';
// import { MatTableModule } from '@angular/material/table';
// import { MatSelectModule } from '@angular/material/select';
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var http_2 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import {CdkTableModule} from '@angular/cdk/table';
var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        core_1.NgModule({
            exports: [],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(admin_layout_routing_1.AdminLayoutRoutes),
                app_module_1.MaterialModule,
                // ReactiveFormsModule,
                // MatToolbarModule,
                // MatIconModule,
                // MatTableModule,
                // MatSidenavModule,
                // MatFormFieldModule,
                // MatInputModule,
                // MatSelectModule,
                // MatCheckboxModule,
                // CdkTableModule,
                //MatTableDataSource,
                forms_1.FormsModule,
                // BrowserModule,
                http_1.HttpClientModule,
                http_2.HttpModule,
            ],
            declarations: [
                // LoginComponent,
                dashboard_component_1.DashboardComponent,
                iaas_component_1.IaasComponent,
                dbaas_component_1.DbaasComponent,
                lbaas_component_1.LbaasComponent,
                item_component_1.ItemComponent,
                create_vm_component_1.CreateVmComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
                org_setup_component_1.OrgSetupComponent,
                // OnBoardUserComponent,
                new_org_component_1.NewOrgComponent,
                admin_dashboard_component_1.AddGroupDialog,
                admin_dashboard_component_1.AddOrgDialog
            ],
            providers: [],
            entryComponents: [admin_dashboard_component_1.AdminDashboardComponent, admin_dashboard_component_1.AddGroupDialog, admin_dashboard_component_1.AddOrgDialog],
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());
exports.AdminLayoutModule = AdminLayoutModule;


/***/ }),

/***/ "./src/app/admin-layout/admin-layout.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-layout/admin-layout.routing.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var dashboard_component_1 = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var iaas_component_1 = __webpack_require__(/*! ../iaas/iaas.component */ "./src/app/iaas/iaas.component.ts");
var item_component_1 = __webpack_require__(/*! ../iaas/tshirt/item.component */ "./src/app/iaas/tshirt/item.component.ts");
var create_vm_component_1 = __webpack_require__(/*! ../iaas/create-vm/create-vm.component */ "./src/app/iaas/create-vm/create-vm.component.ts");
var dbaas_component_1 = __webpack_require__(/*! ../dbaas/dbaas.component */ "./src/app/dbaas/dbaas.component.ts");
var lbaas_component_1 = __webpack_require__(/*! ../lbaas/lbaas.component */ "./src/app/lbaas/lbaas.component.ts");
// import { OnBoardUserComponent } from '../on-board-user/on-board-user.component';
var admin_dashboard_component_1 = __webpack_require__(/*! ../admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
var org_setup_component_1 = __webpack_require__(/*! ../org-setup/org-setup.component */ "./src/app/org-setup/org-setup.component.ts");
var new_org_component_1 = __webpack_require__(/*! ../new-org/new-org.component */ "./src/app/new-org/new-org.component.ts");
exports.AdminLayoutRoutes = [
    // { path: '', component: LoginComponent },
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'admin-dashboard', component: admin_dashboard_component_1.AdminDashboardComponent },
    // { path: 'create-vm', component: CreateVmComponent },
    // { path: 'item', component: ItemComponent },
    { path: 'dbaas', component: dbaas_component_1.DbaasComponent },
    { path: 'lbaas', component: lbaas_component_1.LbaasComponent },
    { path: 'org-setup', component: org_setup_component_1.OrgSetupComponent },
    // { path: 'on-board-user', component: OnBoardUserComponent },
    { path: 'new-org', component: new_org_component_1.NewOrgComponent },
    {
        path: 'iaas', component: iaas_component_1.IaasComponent,
        children: [
            { path: 'create-vm', component: create_vm_component_1.CreateVmComponent },
            { path: 'item', component: item_component_1.ItemComponent },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(exports.AdminLayoutRoutes),
            ],
            exports: [
                router_1.RouterModule
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n  <h1>Service Requests</h1>\n  <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    <!-- Top header -->\n  <!-- <ng-container matColumnDef=\"position\"> -->\n    <!-- <th mat-header-cell *matHeaderCellDef> Service Requests </th> -->\n  <!-- </ng-container> -->\n\n  <!-- <th> Service Requests </th> -->\n  <!-- <mat-header-cell> Service Requests </mat-header-cell> -->\n\n  <ng-container matColumnDef=\"Request ID\">\n    <mat-header-cell *matHeaderCellDef> Request ID </mat-header-cell>\n    <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.id}} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"Description\">\n    <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\n    <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.description}} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"Service Type\">\n      <mat-header-cell *matHeaderCellDef> Service Type </mat-header-cell>\n      <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.type}} </mat-cell>\n    </ng-container>\n\n  <ng-container matColumnDef=\"Status\">\n    <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\n    <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.status}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n  </mat-table>\n</div>\n\n<!-- <button routerLink=\"/admin-dashboard\">Admin Dashboard</button> -->\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center; }\n\nimg {\n  margin-left: 310px;\n  margin-right: auto; }\n\nmat-table {\n  width: 95%;\n  margin-top: 80px;\n  margin-left: auto;\n  margin-right: auto; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var MOCK_DATA = [
    { id: "ORCL12C-0011", description: 'New Oracle 12c Single Instance', type: "DbaaS", status: 'In Progress' },
    { id: "ORCL12C-0006", description: 'New Oracle 12c PDB (Multi-Tenant)', type: "DbaaS", status: 'Completed' },
    { id: "ORCL12C-0009", description: 'New Oracle 11g', type: "DbaaS", status: 'In Progress' }
];
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.displayedColumns = ['Request ID', 'Description', 'Service Type', 'Status'];
        this.dataSource = MOCK_DATA;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/dbaas/dbaas.component.html":
/*!********************************************!*\
  !*** ./src/app/dbaas/dbaas.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>DBaaS Request Service</h1>\n    <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  \n    <ng-container matColumnDef=\"Request ID\">\n      <mat-header-cell *matHeaderCellDef> Request ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.id}} </mat-cell>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"Description\">\n      <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\n      <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.description}} </mat-cell>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"Status\">\n      <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\n      <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.status}} </mat-cell>\n    </ng-container>\n  \n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  \n    </mat-table>\n\n    <!-- Create New CDB, Create New PDB, Clone CDB, Clone PDB -->\n    <button mat-raised-button routerLink=\"/create-vm\">Create New CDB</button>\n    <button mat-raised-button routerLink=\"/create-vm\">Create New PDB</button>\n    <button mat-raised-button routerLink=\"/create-vm\">Clone CDB</button>\n    <button mat-raised-button routerLink=\"/create-vm\">Clone PDB</button>\n  </div>"

/***/ }),

/***/ "./src/app/dbaas/dbaas.component.scss":
/*!********************************************!*\
  !*** ./src/app/dbaas/dbaas.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center; }\n\nimg {\n  margin-left: 310px;\n  margin-right: auto; }\n\nmat-table {\n  width: 80%;\n  margin-top: 80px;\n  margin-left: auto;\n  margin-right: auto; }\n\nbutton {\n  margin-top: 30px;\n  margin-left: 120px;\n  margin-right: auto;\n  font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/dbaas/dbaas.component.ts":
/*!******************************************!*\
  !*** ./src/app/dbaas/dbaas.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var MOCK_DATA = [
    { id: "ORCL12C-0011", description: 'New Oracle 12c Single Instance', status: 'In Progress' },
    { id: "ORCL12C-0006", description: 'New Oracle 12c PDB (Multi-Tenant)', status: 'Completed' },
    { id: "ORCL12C-0009", description: 'New Oracle 11g', status: 'In Progress' }
];
var DbaasComponent = /** @class */ (function () {
    function DbaasComponent() {
        this.displayedColumns = ['Request ID', 'Description', 'Status'];
        this.dataSource = MOCK_DATA;
    }
    DbaasComponent.prototype.ngOnInit = function () {
    };
    DbaasComponent = __decorate([
        core_1.Component({
            selector: 'app-dbaas',
            template: __webpack_require__(/*! ./dbaas.component.html */ "./src/app/dbaas/dbaas.component.html"),
            styles: [__webpack_require__(/*! ./dbaas.component.scss */ "./src/app/dbaas/dbaas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DbaasComponent);
    return DbaasComponent;
}());
exports.DbaasComponent = DbaasComponent;


/***/ }),

/***/ "./src/app/iaas/create-vm/create-vm.component.html":
/*!*********************************************************!*\
  !*** ./src/app/iaas/create-vm/create-vm.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-form-field class=\"addMarginFromTop\"> \n      <!-- VM Host Name: -->\n      <input matInput placeholder=\"VM Host Name\" [(ngModel)]=\"enteredName\">\n      <!-- <mat-hint align=\"start\"><strong>a-z, 0-9, and '-' only</strong> </mat-hint> -->\n      <!-- <mat-error *ngIf=\"hostName.invalid\">{{getErrorMessage()}}</mat-error> -->\n    </mat-form-field>\n  \n    <mat-form-field> \n      <mat-select placeholder=\"VM Size: \" [(ngModel)]=\"selectedValue\">\n        <mat-option *ngFor=\"let size of sizes\" [value]=size> \n          {{size}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n</div>\n\n<div>\n  <button mat-raised-button (click)=\"submit()\"> Submit </button>\n  <!-- <button mat-raised-button routerLink=\"/lbaas\" class=\"submit\"> Submit </button>   -->\n  <!-- <button mat-raised-button (click)=\"cancel()\"> Cancel </button> -->\n  <button mat-raised-button routerLink=\"/iaas\" class=\"cancel\"> Cancel </button>\n</div>"

/***/ }),

/***/ "./src/app/iaas/create-vm/create-vm.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/iaas/create-vm/create-vm.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  font-size: 20px;\n  margin-top: 30px;\n  margin-left: 150px;\n  margin-right: auto; }\n\n.addMarginFromTop {\n  margin-top: 150px; }\n\nmat-form-field {\n  width: 75%;\n  margin-top: 10px;\n  margin-left: 150px;\n  margin-right: auto; }\n\n.container {\n  margin-top: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column; }\n\n.container > * {\n  width: 50%; }\n"

/***/ }),

/***/ "./src/app/iaas/create-vm/create-vm.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/iaas/create-vm/create-vm.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var CreateVmComponent = /** @class */ (function () {
    // constructor(private tshirtSizeService: TshirtSizeService, private http: HttpClient) { }
    function CreateVmComponent(http) {
        this.http = http;
        this.sizes = [];
        this.url = 'https://iaasapi-patient-okapi.kpsj001.us-west.mybluemix.net/iaas/t_size/vmware';
    }
    // postUrl = '../../mockVM.json';
    // getData(): Observable<any> {
    //   return this.http.get(this.url).map(res => res.json());
    // }
    CreateVmComponent.prototype.getData = function () {
        return this.http.get(this.url);
    };
    CreateVmComponent.prototype.getSizes = function () {
        var _this = this;
        this.getData().subscribe(function (res) {
            for (var i = 0; i < 3; i++) {
                _this.sizes.push(res[0]["tsize"][i]["size"]);
            }
            console.log(_this.sizes);
        });
    };
    CreateVmComponent.prototype.submit = function () {
        this.http.post(this.url, {
            name: this.enteredName,
            size: this.selectedValue
            // size: this.size
        })
            .subscribe(function (result) {
            console.log(result);
        }, function (err) {
            console.log('Error occured');
        });
        console.log("name " + this.enteredName);
        console.log("size " + this.selectedValue);
    };
    CreateVmComponent.prototype.ngOnInit = function () {
        this.getSizes();
    };
    CreateVmComponent = __decorate([
        core_1.Component({
            selector: 'app-create-vm',
            template: __webpack_require__(/*! ./create-vm.component.html */ "./src/app/iaas/create-vm/create-vm.component.html"),
            styles: [__webpack_require__(/*! ./create-vm.component.scss */ "./src/app/iaas/create-vm/create-vm.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CreateVmComponent);
    return CreateVmComponent;
}());
exports.CreateVmComponent = CreateVmComponent;


/***/ }),

/***/ "./src/app/iaas/iaas.component.html":
/*!******************************************!*\
  !*** ./src/app/iaas/iaas.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <item></item> -->\n\n<!-- <h1>Infrastructure as a Service(IaaS)</h1>\n<div>\n    <p>IaaS API provides a RESTful service to perform Life Cycle operations on Virtual Machines which can be integrated as part of DevOps pipe line</p>\n</div> -->\n\n<!-- <app-create-vm></app-create-vm> -->\n\n<div>\n    <h1>Virtual Machines</h1>\n      \n    <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n      \n    <ng-container matColumnDef=\"VM Name\">\n        <mat-header-cell *matHeaderCellDef> VM Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.name}} </mat-cell>\n    </ng-container>\n      \n    <ng-container matColumnDef=\"Status\">\n        <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\n        <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.status}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Created By\">\n        <mat-header-cell *matHeaderCellDef> Created By </mat-header-cell>\n        <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.by}} </mat-cell>\n    </ng-container>\n      \n    <ng-container matColumnDef=\"Created Date\">\n        <mat-header-cell *matHeaderCellDef> Created Date </mat-header-cell>\n        <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.date}} </mat-cell>\n    </ng-container>\n      \n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      \n    </mat-table>\n\n    <button mat-raised-button [routerLink]=\"['create-vm']\">Create VM</button>\n    <button mat-raised-button [routerLink]=\"['item']\">Create TShirt</button>\n\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/iaas/iaas.component.scss":
/*!******************************************!*\
  !*** ./src/app/iaas/iaas.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center; }\n\nimg {\n  margin-left: 310px;\n  margin-right: auto; }\n\nmat-table {\n  width: 75%;\n  margin-top: 80px;\n  margin-left: auto;\n  margin-right: auto; }\n\nbutton {\n  margin-top: 30px;\n  margin-left: 150px;\n  margin-right: auto;\n  font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/iaas/iaas.component.ts":
/*!****************************************!*\
  !*** ./src/app/iaas/iaas.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var MOCK_DATA = [
    { name: "Fatdog", status: 'In Progress', by: 'Oracle', date: "300 BC" },
    { name: "Fedora", status: 'Completed', by: 'Oracle', date: "1985", },
    { name: "Ubuntu", status: 'In Progress', by: 'VM Ware', date: "today" }
];
var IaasComponent = /** @class */ (function () {
    function IaasComponent() {
        this.displayedColumns = ['VM Name', 'Status', 'Created By', 'Created Date'];
        this.dataSource = MOCK_DATA;
    }
    IaasComponent.prototype.ngOnInit = function () {
    };
    IaasComponent = __decorate([
        core_1.Component({
            selector: 'app-iaas',
            template: __webpack_require__(/*! ./iaas.component.html */ "./src/app/iaas/iaas.component.html"),
            styles: [__webpack_require__(/*! ./iaas.component.scss */ "./src/app/iaas/iaas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IaasComponent);
    return IaasComponent;
}());
exports.IaasComponent = IaasComponent;


/***/ }),

/***/ "./src/app/iaas/tshirt/item.component.html":
/*!*************************************************!*\
  !*** ./src/app/iaas/tshirt/item.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <table class=\"container\"> \n        <tr>\n        <th>Entity </th>  \n        <th>T-Shirt Size </th>\n        <th>Configuration </th>\n        <th>  </th>\n        </tr>\n        <tr *ngFor=\"let item of items; let i = index\">\n          <td>\n            <select [(ngModel)]=\"entity\" (ngModelChange)=\"update()\" name=\"entity-{{i}}\">\n              <option value=\"server\">001 - Server</option>\n              <option value=\"db\">002 - DB</option>\n            </select>  \n          </td>\n          <td> \n            <!- - <select [(ngModel)]=\"item.tshirtSize\" (ngModelChange)=\"updateCPU()\" >  - ->\n            <select [(ngModel)]=\"tshirtSize\" (ngModelChange)=\"update()\" >  \n              <option *ngFor=\"let size of sizes\" [value]=size>\n                {{size}}\n              </option>\n            </select>\n          </td>\n      \n          <td>\n          <!- - <div> CPU Count: <input [(ngModel)]=\"item.cpu\" > </div> -- >\n          <div> CPU Count: <input disabled [(ngModel)]=\"cpu\" placeholder=\"{{cpu}}\" >  </div>\n          <!- - <div [(ngModel)]=\"item.cpu\"> CPU Count: {{cpuArray[0]}} </div> -- >\n          <!- - i get a stupid error ^ -- >\n\n          <div> Memory: <input disabled [(ngModel)]=\"memory\" placeholder=\"{{memory}}\" >  </div>\n          <div *ngIf=\"isDB\"> Disk: <input disabled [(ngModel)]=\"disk\" placeholder=\"{{disk}}\"> </div>\n          </td>\n      \n          <td> \n            <button title=\"delete\" (click)=\"delete(i)\">\n              X\n            </button> \n          </td>\n        </tr>   \n        \n        <button mat-raised-button (click)=\"submit()\">Submit</button>\n        <button mat-raised-button class=\"cancel\" routerLink=\"/iaas\"> Cancel </button> \n        <button mat-raised-button style=\"margin-left: 180px;\" (click)=\"add()\">Add New</button> \n\n</table> -->\n    \n\n<div class=\"container\">\n  <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8  \">\n\n    <ng-container matColumnDef=\"Entity\">\n      <mat-header-cell *matHeaderCellDef> Entity </mat-header-cell>\n      <mat-cell *matCellDef=\"let item\"> \n        <mat-select [(ngModel)]=\"entity\" (ngModelChange)=\"update()\">\n          <mat-option value=\"server\"> 001 - Server </mat-option>\n          <mat-option value=\"db\"> 002 - DB </mat-option>\n        </mat-select>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"T-Shirt Size\">\n      <mat-header-cell *matHeaderCellDef> T-Shirt Size </mat-header-cell>\n      <mat-cell *matCellDef=\"let item\"> \n        <mat-select placeholder=\"Select Size\" [(ngModel)]=\"tshirtSize\" (ngModelChange)=\"update()\"> \n          <mat-option *ngFor=\"let size of sizes\" [value]=size>\n              {{size}}\n          </mat-option>\n        </mat-select>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Configuration\">\n      <mat-header-cell *matHeaderCellDef> Configuration </mat-header-cell>\n      <mat-cell *matCellDef=\"let item\"> \n        <form>\n        <!-- <mat-form-field> -->\n          <!-- <input matInput [(ngModel)]=\"item.cpu\" placeholder=\"CPU Count\" name=\"cpu\"> -->\n\n          <div> CPU Count: {{cpu}}  </div>\n          <div> Memory: {{memory}} </div>\n          <div *ngIf=\"isDB\"> Disk: {{disk}} </div> \n          <!-- <div> Memory: <input disabled [(ngModel)]=\"memory\" placeholder=\"{{memory}}\" >  </div> -->\n          <!-- <div *ngIf=\"isDB\"> Disk: <input disabled [(ngModel)]=\"disk\" placeholder=\"{{disk}}\"> </div> -->\n\n        <!-- </mat-form-field> -->\n        <!-- <mat-form-field> -->\n          <!-- <input matInput [(ngModel)]=\"item.memory\" placeholder=\"Memory\" name=\"memory\"> -->\n        <!-- </mat-form-field> -->\n        <!-- <mat-form-field> -->\n          <!-- <input matInput [(ngModel)]=\"item.disk\" placeholder=\"Disk\" name=\"disk\"> -->\n        <!-- </mat-form-field> -->\n        </form>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n\n  <button mat-raised-button (click)=\"submit()\">Submit</button>\n  <button mat-raised-button routerLink=\"/iaas\"> Cancel </button>\n\n</div>"

/***/ }),

/***/ "./src/app/iaas/tshirt/item.component.scss":
/*!*************************************************!*\
  !*** ./src/app/iaas/tshirt/item.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse; }\n\ntd {\n  border: 1px solid black; }\n\nh1, h2 {\n  text-align: center; }\n\nmat-table {\n  width: 80%; }\n\nbutton {\n  margin-top: 30px;\n  margin-right: auto;\n  font-size: 20px; }\n\nbutton.cancel {\n  margin-left: 25px; }\n\n.container {\n  margin-top: 100px;\n  margin-left: 200px;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/iaas/tshirt/item.component.ts":
/*!***********************************************!*\
  !*** ./src/app/iaas/tshirt/item.component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// import {MatTableDataSource} from '@angular/material';
// import {DataSource} from '@angular/cdk/collections';
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// import { BehaviorSubject } from 'rxjs';
// import { Item } from './item'; 
var item_service_1 = __webpack_require__(/*! ./item.service */ "./src/app/iaas/tshirt/item.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var DataResponse = /** @class */ (function () {
    function DataResponse() {
    }
    return DataResponse;
}());
exports.DataResponse = DataResponse;
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
exports.Item = Item;
var MOCK_DATA = [
    { entity: "001 - Server", tshirtSize: "small", cpu: "", memory: "memory", disk: "none" },
];
var ItemComponent = /** @class */ (function () {
    //dataSource = new ItemComponent(this.itemService, this.http);
    // dataSource = new ItemComponent( this.http);
    // constructor(private http: HttpClient)  { 
    function ItemComponent(itemService, http, router) {
        this.itemService = itemService;
        this.http = http;
        this.router = router;
        // public sizes = ["Select Size"];
        this.sizes = [];
        this.cpuArray = [];
        this.memoryArray = [];
        this.storageArray = [];
        this.api = 'https://iaasapi-patient-okapi.kpsj001.us-west.mybluemix.net/iaas/t_size/vmware';
        this.url = 'http://localhost:3000/items'; //mock db
        this.displayedColumns = ['Entity', 'T-Shirt Size', 'Configuration'];
        this.dataSource = MOCK_DATA;
        // dataSource = this.items;
        // dataSource = this.itemService.ITEMS;
        this.subject = new rxjs_1.BehaviorSubject(this.items);
        this.newItem = {
            "entity": "",
            "tshirtSize": "",
            "cpu": "",
            "memory": "",
            "disk": ""
        };
    }
    ItemComponent.prototype.getData = function () {
        return this.http.get(this.api);
    };
    ItemComponent.prototype.getSizes = function () {
        var _this = this;
        this.getData().subscribe(function (res) {
            for (var i = 0; i < 3; i++) {
                _this.sizes.push(res[0]["tsize"][i]["size"]);
            }
            console.log("Sizes Array: [" + _this.sizes + "]");
            console.log("starting tshirt " + _this.tshirtSize);
        });
    };
    ItemComponent.prototype.getCPU = function () {
        var _this = this;
        this.getData().subscribe(function (res) {
            for (var size in _this.sizes) {
                _this.cpuArray.push(res[0]["tsize"][size]["cpu"]);
            }
            // this.cpu = this.cpuArray[size];
            console.log("CPU Array: [" + _this.cpuArray + "]");
        });
        //   for {var i = 0; }
        //   this.item.tshirtSize == small 
        //     cpu
        //   if (this.sizes[0] === ) {
        // this.cpu = this.cpuArray[0]; // this makes no sense
        // console.log(this.cpu); // this makes no sense
        // return this.cpu;
        //   }
    };
    ItemComponent.prototype.getMemory = function () {
        var _this = this;
        this.getData().subscribe(function (res) {
            for (var size in _this.sizes) {
                _this.memoryArray.push(res[0]["tsize"][size]["memory"]);
            }
            // this.cpu = this.cpuArray[size];
            console.log("Memory Array: [" + _this.memoryArray + "]");
        });
    };
    ItemComponent.prototype.getStorage = function () {
        var _this = this;
        this.getData().subscribe(function (res) {
            for (var size in _this.sizes) {
                _this.storageArray.push(res[0]["tsize"][size]["storage"]);
            }
            // this.cpu = this.cpuArray[size];
            console.log("Storage Array: [" + _this.storageArray + "]");
        });
    };
    ItemComponent.prototype.update = function () {
        console.log(this.entity + " is selected");
        //     var currentIndex: number;
        //     console.log("current entity selected: " + this.entity);
        //     for (var i = 0; i < this.items.length; i++) {
        //         if (this.items[i].entity === "db") {
        //             this.isDB = true;
        //         }
        //         else {
        //             this.isDB = false;
        //         }
        //         /*if (this.items[i].tshirtSize === this.sizes[i]) {
        //             currentIndex = i;
        //         }*/
        //     // if (this.items[0].entity === "db") {
        //     //     this.isDB = true;
        //     // }
        //     // else {
        //     //     this.isDB = false;
        //     // }
        //       for (var i = 0; i < this.sizes.length; i++ ) {
        //         if (this.tshirtSize === this.sizes[i]) {
        //         if (this.items[i].tshirtSize === this.sizes[i]) {
        //             currentIndex = i;
        //         }
        //     }
        // }
        //     this.items[i].cpu = this.cpuArray[currentIndex];
        //     console.log("matching cpu: " + this.items[i].cpu);
        //       }
        //     console.log("current size selected: " + this.tshirtSize);
        //start
        console.log("current entity selected: " + this.entity);
        if (this.entity === "db") {
            this.isDB = true;
        }
        else {
            this.isDB = false;
        }
        console.log("current size selected: " + this.tshirtSize);
        var currentIndex;
        for (var i = 0; i < this.sizes.length; i++) {
            if (this.tshirtSize === this.sizes[i]) {
                currentIndex = i;
            }
        }
        this.cpu = this.cpuArray[currentIndex];
        console.log("matching cpu: " + this.cpu);
        this.memory = this.memoryArray[currentIndex];
        console.log("matching memory: " + this.memory);
        this.disk = this.storageArray[currentIndex];
        console.log("matching disk: " + this.disk);
        //end
        //   this.cpu = this.cpuArray[currentIndex];
        //   console.log("matching cpu: " + this.cpu);
        //   this.memory = this.memoryArray[currentIndex];
        //   console.log("matching memory: " + this.memory);
        //   this.disk = this.storageArray[currentIndex];
        //   console.log("matching disk: " + this.disk);
    }; //end update()
    ItemComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getItems()
            .subscribe(function (items) { return _this.items = items; });
    };
    ItemComponent.prototype.add = function () {
        var _this = this;
        var xItem;
        this.http.get(this.url).subscribe(function (data) {
            xItem = {
                "entity": data.entity,
                "tshirtSize": data.tshirtSize,
                "cpu": data.cpu,
                "memory": data.memory,
                "disk": data.disk
            };
            _this.items.push(xItem);
        }, function (err) {
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
        // MOCK_DATA.push(this.newItem);
        // console.log(MOCK_DATA);
        // this.dataSource = new MatTableDataSource(MOCK_DATA);
        //this.dataSource = new MatTableDataSource(MOCK_DATA);
        // this.items.push(this.newItem);
        // this.subject.next(this.items);
        // console.log(this.subject);
        // console.log(this.items);
    };
    ItemComponent.prototype.delete = function (index) {
        this.items.splice(index, 1);
    };
    ItemComponent.prototype.submit = function () {
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
            this.http.post(this.url, {
                id: this.counter++,
                // entity: this.items[i].entity, 
                entity: this.entity,
                // tshirtSize: this.items[i].tshirtSize, 
                tshirtSize: this.tshirtSize,
                // cpu: this.items[i].cpu, 
                cpu: this.cpu,
                // memory: this.items[i].memory, 
                memory: this.memory,
                // disk: this.items[i].disk 
                disk: this.disk
            })
                .subscribe(function (result) {
                console.log(result);
            }, function (err) {
                console.log('Error occured');
            });
        }
        // this.router.navigate(['./']);
    };
    // selectDB() { 
    //     this.isDB = true;
    //     return this.isDB; 
    // } 
    // selectServer(): void { 
    //     this.isDB = false; 
    // } 
    ItemComponent.prototype.ngOnInit = function () {
        this.getItems();
        this.getSizes();
        this.getCPU();
        this.getMemory();
        this.getStorage();
        this.isDB = false;
    };
    ItemComponent = __decorate([
        core_1.Component({
            selector: 'item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/iaas/tshirt/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/iaas/tshirt/item.component.scss")],
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService, http_1.HttpClient, router_1.Router])
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;


/***/ }),

/***/ "./src/app/iaas/tshirt/item.service.ts":
/*!*********************************************!*\
  !*** ./src/app/iaas/tshirt/item.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
exports.Item = Item;
exports.ITEMS = [
    //   { entity: 'server', tshirtSize: 's', cpu: '10', memory: '', disk: '' },
    //   { entity: 'db', tshirtSize: 'm', cpu: '', memory: '', disk: '' },
    { entity: '', tshirtSize: '', cpu: '', memory: '', disk: '' }
];
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var ItemService = /** @class */ (function () {
    // export class ItemService extends DataSource<any> {
    // connect(): Observable<any[]> {
    //   return this._list$;
    // }
    // disconnect() {
    // }
    // constructor(private http: HttpClient, private _list$: Observable<any[]>) { 
    function ItemService(http) {
        this.http = http;
        // super();
    }
    // itemUrl = 'api/items';
    ItemService.prototype.getItems = function () {
        return rxjs_1.of(exports.ITEMS);
    };
    /** GET heroes from the server */
    // getItems (): Observable<Item[]> {
    //   return this.http.get<Item[]>(this.itemUrl)
    //     .pipe(
    //       catchError(this.handleError('getHeroes', []))
    //     );
    // }
    ItemService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return rxjs_1.of(result);
        };
    };
    ItemService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
        // @Injectable()
        ,
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;


/***/ }),

/***/ "./src/app/lbaas/lbaas.component.html":
/*!********************************************!*\
  !*** ./src/app/lbaas/lbaas.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  lbaas works!\n</p> -->\n<img src=\"../../assets/Phat_Huynh.jpg\">\n"

/***/ }),

/***/ "./src/app/lbaas/lbaas.component.scss":
/*!********************************************!*\
  !*** ./src/app/lbaas/lbaas.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  margin-top: 50px;\n  margin-left: auto;\n  margin-right: auto; }\n"

/***/ }),

/***/ "./src/app/lbaas/lbaas.component.ts":
/*!******************************************!*\
  !*** ./src/app/lbaas/lbaas.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var LbaasComponent = /** @class */ (function () {
    function LbaasComponent() {
    }
    LbaasComponent.prototype.ngOnInit = function () {
    };
    LbaasComponent = __decorate([
        core_1.Component({
            selector: 'app-lbaas',
            template: __webpack_require__(/*! ./lbaas.component.html */ "./src/app/lbaas/lbaas.component.html"),
            styles: [__webpack_require__(/*! ./lbaas.component.scss */ "./src/app/lbaas/lbaas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LbaasComponent);
    return LbaasComponent;
}());
exports.LbaasComponent = LbaasComponent;


/***/ }),

/***/ "./src/app/new-org/new-org.component.html":
/*!************************************************!*\
  !*** ./src/app/new-org/new-org.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-form-field class=\"addMarginFromTop\"> \n    <input matInput placeholder=\"Org ID\" [(ngModel)]=\"enterdID\">\n    <!-- <mat-hint align=\"start\"><strong>a-z, 0-9, and '-' only</strong> </mat-hint> -->\n    <!-- <mat-error *ngIf=\"hostName.invalid\">{{getErrorMessage()}}</mat-error> -->\n  </mat-form-field>\n\n  <mat-form-field> \n    <input matInput placeholder=\"Org Name\" [(ngModel)]=\"enteredName\">\n  </mat-form-field>\n</div>\n\n<div>\n<button mat-raised-button (click)=\"save()\"> Save </button>\n<button mat-raised-button routerLink=\"/org-setup\" class=\"cancel\"> Cancel </button>\n</div>"

/***/ }),

/***/ "./src/app/new-org/new-org.component.scss":
/*!************************************************!*\
  !*** ./src/app/new-org/new-org.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  font-size: 20px;\n  margin-top: 30px;\n  margin-left: 150px;\n  margin-right: auto; }\n\n.addMarginFromTop {\n  margin-top: 150px; }\n\nmat-form-field {\n  width: 75%;\n  margin-top: 10px;\n  margin-left: 150px;\n  margin-right: auto; }\n\n.container {\n  margin-top: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column; }\n\n.container > * {\n  width: 50%; }\n"

/***/ }),

/***/ "./src/app/new-org/new-org.component.ts":
/*!**********************************************!*\
  !*** ./src/app/new-org/new-org.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var NewOrgComponent = /** @class */ (function () {
    function NewOrgComponent() {
    }
    NewOrgComponent.prototype.save = function () {
    };
    NewOrgComponent.prototype.ngOnInit = function () {
    };
    NewOrgComponent = __decorate([
        core_1.Component({
            selector: 'app-new-org',
            template: __webpack_require__(/*! ./new-org.component.html */ "./src/app/new-org/new-org.component.html"),
            styles: [__webpack_require__(/*! ./new-org.component.scss */ "./src/app/new-org/new-org.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewOrgComponent);
    return NewOrgComponent;
}());
exports.NewOrgComponent = NewOrgComponent;


/***/ }),

/***/ "./src/app/org-setup/org-setup.component.html":
/*!****************************************************!*\
  !*** ./src/app/org-setup/org-setup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>Org Setup</h1>\n    <h2>Org List</h2>\n    <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  \n    <ng-container matColumnDef=\"Org ID\">\n      <mat-header-cell *matHeaderCellDef> Org ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.orgID}} </mat-cell>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"Org Name\">\n      <mat-header-cell *matHeaderCellDef> Org Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let mockdata\"> {{mockdata.orgName}} </mat-cell>\n    </ng-container>\n  \n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  \n    </mat-table>\n\n    <button mat-raised-button routerLink=\"/new-org\" class=\"cancel\"> New Org </button>\n    <button mat-raised-button>Edit Org</button>\n    <button mat-raised-button>Delete Org</button>\n    <button mat-raised-button routerLink=\"/admin-dashboard\" class=\"cancel\"> Cancel </button>\n</div>"

/***/ }),

/***/ "./src/app/org-setup/org-setup.component.scss":
/*!****************************************************!*\
  !*** ./src/app/org-setup/org-setup.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2 {\n  text-align: center; }\n\nmat-table {\n  width: 80%;\n  margin-top: 80px;\n  margin-left: auto;\n  margin-right: auto; }\n\nbutton {\n  margin-top: 30px;\n  margin-left: 120px;\n  margin-right: auto;\n  font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/org-setup/org-setup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/org-setup/org-setup.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var MOCK_DATA = [
    { orgID: "12345", orgName: 'IMG' },
    { orgID: "67890", orgName: 'TRO' },
    { orgID: "11235", orgName: 'CTO' }
];
var OrgSetupComponent = /** @class */ (function () {
    function OrgSetupComponent() {
        this.displayedColumns = ['Org ID', 'Org Name'];
        this.dataSource = MOCK_DATA;
    }
    OrgSetupComponent.prototype.ngOnInit = function () {
    };
    OrgSetupComponent = __decorate([
        core_1.Component({
            selector: 'app-org-setup',
            template: __webpack_require__(/*! ./org-setup.component.html */ "./src/app/org-setup/org-setup.component.html"),
            styles: [__webpack_require__(/*! ./org-setup.component.scss */ "./src/app/org-setup/org-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrgSetupComponent);
    return OrgSetupComponent;
}());
exports.OrgSetupComponent = OrgSetupComponent;


/***/ })

}]);
//# sourceMappingURL=admin-layout-admin-layout-module.js.map