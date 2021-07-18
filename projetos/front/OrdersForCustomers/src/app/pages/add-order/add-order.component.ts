import {map, switchMap} from 'rxjs/operators';
import {Observable, merge, of} from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



import { Customer, Order } from 'src/app/models/Order';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  form$: Observable<FormGroup>;

  constructor(private fb: FormBuilder, private service: ApiServiceService,private activeRoute: ActivatedRoute, private router: Router) {
    
    this.form$ =
    merge(
      this.activeRoute.paramMap,
    )
    .pipe(
      switchMap(() => this.activeRoute.paramMap),
      map(p => (
        {
          id: p.get('id') || ''
        })
      ),
      switchMap(p => (p.id !== null && p.id !== "") ? this.service.getOrder(p.id) : of(new Order()) ),
      map(o => (       
          o
        )
      ),
      switchMap(o => {
        
        return of(this.fb.group({
          id: [o.id ?? null],
          customerId: [o.customer?.id ?? null],
          number: [o.number ?? null,[Validators.required]],
          customerName: [o.customer?.name ?? null,[Validators.required]],
          description: [o.description ?? null,[Validators.required]],
        }));
      })
    );
    

  }

  ngOnInit(): void {

  }

  salvar(form: FormGroup){
    if(!form.valid)
    {
      alert("formulario invalido");
      return;
    }

    let order:Order = new Order();
    let customer: Customer = new Customer();
    console.log(form.value)

    customer.id = form.value?.customerid;
    customer.name = form.value?.customerName;
    
    order.id = form.value?.id ;
    order.description = form.value.description;
    order.number = form.value.number;
    order.customer = customer;

    if(order?.id === null || order?.id === "")
    {
      console.log(form.value)
      this.service.addOrder(order).subscribe(_=> this.router.navigate(['/']));
    }else
    {
      this.service.updateOrder(order).subscribe(_=> this.router.navigate(['/']));
    }
  }
}

