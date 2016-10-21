import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {PriceCalculator} from "./price-calculator.pipe";
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PriceCalculator ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }