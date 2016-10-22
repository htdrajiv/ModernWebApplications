import { Component } from '@angular/core';
import {Product} from "./product.component";
import {ProductService} from "./product.service";
import { OnInit } from '@angular/core';
import {PRODUCTS} from "./mock-product.component";
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'my-products',
  providers: [ProductService],
  templateUrl:"products.component.html" ,
  styleUrls: ['app.component.css']
})

export class ProductsComponent  implements OnInit {
  constructor(private router:Router,private productService: ProductService) { }
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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
}
