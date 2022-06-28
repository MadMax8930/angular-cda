import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public collection$: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`);

    // this.collection$.subscribe(() => {})// a l'ancienne
    // this.collection$.subscribe({
    //   next: () => {},
    //   error: () => {},
    //   complete: () => {}
    // })// en utilisant les 3 callback dispo
   }
}
