import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection!: Order[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.collection$.subscribe(
      (data: Order[]) => {
        this.collection = [...data];
        console.log(this.collection);
      } 
    )
  }

}
