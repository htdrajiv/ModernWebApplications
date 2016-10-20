/**
 * Created by Rajiv on 10/19/2016.
 */

import {Component} from "@angular/core";
import {ProductService} from "./product.service";
import {Product} from "./product";
import {OnInit} from "@angular/core";
@Component({
    providers:[ProductService],
    selector:'my-products',
    templateUrl:'app/products.component.html',
    styleUrls: [ 'app/products.component.css' ]
})

export class ProductsComponent implements OnInit{
    products: Product[] = [];
    constructor(private productService : ProductService){}
    ngOnInit(): void {
        this.products = ProductService.getProducts();
    }
}
