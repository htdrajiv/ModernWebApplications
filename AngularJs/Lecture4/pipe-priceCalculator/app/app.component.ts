import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
        Quantity: <input #quantity (keyup)="0"/>
        Rate: <input #rate (keyup)="0"/>
        <h1>{{rate.value | priceCalculator:quantity.value }}</h1>    `
})
export class AppComponent {}
