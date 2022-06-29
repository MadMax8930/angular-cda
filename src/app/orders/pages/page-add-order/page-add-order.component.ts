import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public newOrder = new Order();

  constructor(
    private ordersService: OrdersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmitAddOrder(submittedOrder: Order){
    console.log("PARENT", submittedOrder);
    this.ordersService.add(submittedOrder).subscribe(
      () => {
        this.router.navigateByUrl(`/orders`)
        // ou 
        // this.router.navigate(['orders'])
      }
    )
  }

}
