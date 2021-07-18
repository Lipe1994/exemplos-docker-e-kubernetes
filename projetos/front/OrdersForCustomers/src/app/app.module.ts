import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './pages/orders/orders.component';

import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AddOrderComponent } from './pages/add-order/add-order.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    AddOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
