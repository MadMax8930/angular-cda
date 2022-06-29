import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  // public parentCollection!: Order[];
  public collection$!: Observable<Order[]>;
  public parentHeaders: string[];
  public monTitre: {label: string};
  public testSubject$!: Subject<string>;
  public listStateOrder = StateOrder;

  constructor(private ordersService: OrdersService) {
    this.monTitre = {label: "Liste des commandes"};
    this.parentHeaders = ["TjmHt", "NbJours", "TVA", "TotalHt", "TotalTtc", "Type Presta", "Client", "State"];
   }

  ngOnInit(): void {
    // this.ordersService.collection$.subscribe(
    //   (data: Order[]) => {
    //     this.parentCollection = [...data];
    //     console.log(this.parentCollection);
    //   } 
    // )
    this.collection$ = this.ordersService.collection$;
    // test 
    this.testSubject$ = this.ordersService.subject$;

    setTimeout(() => {
      this.ordersService.subject$.next("Coucou");
    }, 5000);
  }

  changeTitle() {
    // en JS il n'y a aucun changement car pas de respect du principe d'immuabilité
    //this.monTitre.label = 'Un Autre titre';

    //respect du principe d'immuabilité 
    this.monTitre = {label: 'Un Autre titre'};

  }

  calculTotalHt(order: Order): number {
    console.error("Call CalculTotalHt");
    let resultHt = order.tjmHt * order.nbJours;
    return resultHt;
  }

  calculTotalTtc(order: Order): number {
    let resultTtc = order.tjmHt * (1 + order.tva/100)   * order.nbJours;
    return resultTtc;
  }

  onChangeState(order: Order, selectedState: any) {
    console.log(selectedState.target.value);
    
    this.ordersService.changeState(order, selectedState.target.value).subscribe(
      (updatedOrder: Order) => order = updatedOrder
    )
  }

  ngDoCheck(): void {
    console.warn('Check PAGE LIST ORDER')
  }

}
