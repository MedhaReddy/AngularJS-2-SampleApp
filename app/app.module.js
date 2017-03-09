"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//import { FormsModule } from '@angular/forms';
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
//import { ProductListComponent } from './products/product-list.component';
//import { ProductFilterPipe } from './products/product-filter.pipe';
//import { StarComponent } from './shared/star.component';
var welcome_component_1 = require("./home/welcome.component");
//import { ProductDetailComponent } from './products/product-detail.component';
//import { ProductDetailGuard } from './products/product-guard.service';
var product_module_1 = require("./products/product.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            //FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                // { path: 'products', component: ProductListComponent },
                // { path: 'product/:id', 
                //   canActivate: [ ProductDetailGuard ],
                //   component: ProductDetailComponent },
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' } //wildcard:if others notfound
            ]),
            product_module_1.ProductModule
        ],
        declarations: [
            app_component_1.AppComponent,
            // ProductListComponent,
            // ProductFilterPipe,
            // StarComponent,
            welcome_component_1.WelcomeComponent,
        ],
        // providers: [ ProductDetailGuard ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map