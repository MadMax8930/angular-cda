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
  public monTitre: {label: string};

  constructor(private ordersService: OrdersService) {
    this.monTitre = {label: "Liste des commandes"};
   }

  ngOnInit(): void {
    this.ordersService.collection$.subscribe(
      (data: Order[]) => {
        this.collection = [...data];
        console.log(this.collection);
      } 
    )
  }

  changeTitle() {
    // en JS il n'y a aucun changement car pas de respect du principe d'immuabilité
    //this.monTitre.label = 'Un Autre titre';

    //respect du principe d'immuabilité 
    this.monTitre = {label: 'Un Autre titre'};

  }

  ngDoCheck(): void {
    console.warn('Check PAGE LIST ORDER')
  }

}
