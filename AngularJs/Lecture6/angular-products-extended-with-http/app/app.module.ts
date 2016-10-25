import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import {ProductsComponent} from "./products.component";
import {ProductService} from "./product.service";
import { RouterModule }   from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {ProductSearchComponent} from "./product-search.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
     InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule
  ],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductsComponent,
    DashboardComponent,
    ProductSearchComponent
  ],
  providers: [
    ProductService
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule { }
