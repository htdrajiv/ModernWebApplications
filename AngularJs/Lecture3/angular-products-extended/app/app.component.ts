import { Component } from '@angular/core';
import {Product} from "./product.component";
import {ProductService} from "./product.service";
import { OnInit } from '@angular/core';
import {PRODUCTS} from "./mock-product.component";


@Component({
  selector: 'my-app',
  providers: [ProductService],
  templateUrl:"app/products.component.html" ,
  styleUrls: ['app/app.component.css']
})

export class AppComponent  implements OnInit {
  constructor(private productService: ProductService) { }
  selectedProduct: Product;
  title = 'Tour of Products';
  products : Product[];

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProductsSlowly().then(products => this.products = products);
  }
}
