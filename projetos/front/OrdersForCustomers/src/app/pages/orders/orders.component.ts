import { Component, OnInit } from '@angular/core';
import { merge } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap, tap } from 'rxjs/operators';
import { Order } from 'src/app/models/Order';
import { ApiServiceService } from 'src/app/services/api-service.service'; 

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]>;

  constructor(private service: ApiServiceService) {

    this.orders$ = merge(
      this.service.orderChanges$,
      this.service.getOrders()
    )
    .pipe(
      switchMap(_ => this.service.getOrders()),
      tap(_ => console.log(_))
    );
  }


  ngOnInit(): void {
  }

  delete(id: string)
  {
    this.service.deleteOrder(id).subscribe();

  }

}
