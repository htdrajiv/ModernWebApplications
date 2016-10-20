"use strict";
var product_1 = require("./product");
/**
 * Created by Rajiv on 10/18/2016.
 */
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.getProducts = function () {
        return [
            new product_1.Product(1, 'Iphone', 'mobile', 2),
            new product_1.Product(2, 'Tablet', 'mobile', 3),
            new product_1.Product(3, 'Laptop', 'computer', 3)
        ];
    };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map