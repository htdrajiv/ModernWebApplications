/**
 * Created by Rajiv on 10/20/2016.
 */
import { Component, Input } from '@angular/core';
import {Product} from "./product.component";

@Component({
  selector: 'my-product-detail',
  templateUrl:'app/product-detail.component.html'
})
export class ProductDetailComponent {
  @Input()
  product: Product;
}
