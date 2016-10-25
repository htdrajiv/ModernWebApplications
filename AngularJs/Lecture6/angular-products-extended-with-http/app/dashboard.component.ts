/**
 * Created by Rajiv on 10/21/2016.
 */
import { Component, OnInit } from '@angular/core';

import { Product } from './product.component';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[] = [];

  constructor(private router: Router,private productService: ProductService) { }

  ngOnInit(): void {
    console.log(this.productService.getProducts());
    this.productService.getProducts()
      .then(products => this.products = products.slice(1, 5));
  }

  gotoDetail(product: Product): void {
    let link = ['/detail', product.id];
    this.router.navigate(link);
  }
}
