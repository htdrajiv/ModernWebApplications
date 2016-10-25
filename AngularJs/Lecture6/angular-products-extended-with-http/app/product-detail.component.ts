/**
 * Created by Rajiv on 10/20/2016.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Product} from "./product.component";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "./product.service";
import { Location }   from '@angular/common';

@Component({
  moduleId:module.id,
  selector: 'my-product-detail',
  templateUrl:'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  @Input()
  product: Product;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.productService.getProduct(id)
        .then(product => this.product = product);
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.productService.update(this.product)
      .then(() => this.goBack());
  }
}
