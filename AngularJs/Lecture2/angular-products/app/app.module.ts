import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductFormComponent } from './product-form.component';
import { DashboardComponent } from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {ProductsComponent} from "./products.component";
// import {AppRoutingModule} from "./app-routing.module";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
      AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProductFormComponent,
    DashboardComponent,
      ProductsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }