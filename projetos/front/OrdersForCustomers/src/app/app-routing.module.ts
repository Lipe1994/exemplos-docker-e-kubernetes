import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOrderComponent } from './pages/add-order/add-order.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  {path: '', component: OrdersComponent},
  {path: 'add-order', component: AddOrderComponent},
  {path: 'add-order/:id', component: AddOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
