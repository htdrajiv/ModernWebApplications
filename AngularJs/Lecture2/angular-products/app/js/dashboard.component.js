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
/**
 * Created by Rajiv on 10/18/2016.
 */
var core_1 = require('@angular/core');
var product_service_1 = require("./product.service");
var DashboardComponent = (function () {
    function DashboardComponent(productService) {
        this.productService = productService;
        this.products = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.products = product_service_1.ProductService.getProducts();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            providers: [product_service_1.ProductService],
            selector: 'show-products',
            templateUrl: 'app/dashboard.component.html',
            styleUrls: ['app/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map