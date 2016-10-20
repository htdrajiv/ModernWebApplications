import { Component } from '@angular/core';
import {Product} from "./product.component";

const PRODUCTS: Product[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  templateUrl:"app/products.component.html" ,
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
  selectedProduct: Product;
  title = 'Tour of Products';
  products = PRODUCTS;

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
