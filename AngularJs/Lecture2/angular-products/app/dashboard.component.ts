/**
 * Created by Rajiv on 10/18/2016.
 */
import { Component,OnInit } from '@angular/core';
import { Product }    from './product';
import {ProductService} from "./product.service";

@Component({
    providers:[ProductService],
    selector: 'show-products',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: [ 'app/dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{
    products: Product[] = [];
    constructor(private productService : ProductService){}
    ngOnInit(): void {
        this.products = ProductService.getProducts();
    }
}

