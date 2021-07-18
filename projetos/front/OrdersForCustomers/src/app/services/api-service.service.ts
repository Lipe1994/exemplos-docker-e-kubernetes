import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  BASE_URL = environment.api_url +"/Order";

  constructor(private http: HttpClient) { }

  private orderChangesSubject = new Subject<Order>();

  get orderChanges$() {
      return this.orderChangesSubject.asObservable();
  }

  getOrders(): Observable<Order[]>
  {
    return this.http.get<Order[]>(`${this.BASE_URL}/List`);
  }

  addOrder(order: Order)
  {
    return this.http.post(`${this.BASE_URL}`, order);
  }

  updateOrder(order: Order)
  {
    return this.http.put(`${this.BASE_URL}/${order.id}/Update`, order);
  }
  
  getOrder(id: string) : Observable<Order>
  {
    return this.http.get<Order>(`${this.BASE_URL}/${id}/Get`);
  }

  deleteOrder(id: string)
  {
    return this.http
      .delete(`${this.BASE_URL}/${id}/Delete`)
      .pipe(
        tap(_ => this.orderChangesSubject.next()),
        tap(_ => this.getOrders())
      );
  }

}
