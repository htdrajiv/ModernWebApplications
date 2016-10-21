/**
 * Created by Rajiv on 10/20/2016.
 */
import { Injectable } from '@angular/core';

import { PRODUCTS } from './mock-product.component';
import {Product} from "./product.component";


@Injectable()
export class ProductService {
  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getProductsSlowly(): Promise<Product[]> {
    return new Promise<Product[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getProducts());
  }
}
