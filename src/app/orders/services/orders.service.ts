import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, Subject, tap } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public collection$: Observable<Order[]>;
  private urlApi = environment.urlApi;

  // Observable froid 
  private observable$ = new Observable((obs) => obs.next(Math.random()));

  //Observable chaud
  public subject$ = new Subject<string>();
  private behaviorSubject$ = new BehaviorSubject<string>("data Init");

  constructor(private http: HttpClient) {
    // this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
    //   map((listObjet: any[]) => listObjet.map((objet: any) => new Order(objet)))
    // );

    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      tap((listObjet: any[]) => console.log('AVANT : ', listObjet)),
      map((listObjet: any[]) => {
        const listOrder = listObjet.map((objet: any) => new Order(objet));
        console.log('APRES : ', listOrder);
        return listOrder;
      })
    );

    // this.collection$.subscribe(() => {})// a l'ancienne
    // this.collection$.subscribe({
    //   next: () => {},
    //   error: () => {},
    //   complete: () => {}
    // })// en utilisant les 3 callback dispo

    this.observable$.subscribe((data) => console.log(`Observer 1 : ${data}`));
    this.observable$.subscribe((data) => console.log(`Observer 2 : ${data}`));

    console.warn('Subscribe subject');
    this.subject$.subscribe((data) => console.log(`Observer subject 1 : ${data}`));
    this.subject$.subscribe((data) => console.log(`Observer subject 2 : ${data}`));
    
    console.warn('Next subject');
    this.subject$.next('Premier message');
    
    console.warn('Subscribe subject');
    console.log('Troisième observer');
    this.subject$.subscribe((data) => console.log(`Observer subject 3 : ${data}`));
    
    console.warn('Next');
    this.subject$.next('Second message');

    console.warn('Start behav');
    
    console.warn('Subscribe');
    this.behaviorSubject$.subscribe((data) => console.log(`Observer behavsubject 1 : ${data}`));
    this.behaviorSubject$.subscribe((data) => console.log(`Observer behavsubject 2 : ${data}`));
    
    console.warn('Next');
    this.behaviorSubject$.next('Premier message');
    console.warn(
      this.behaviorSubject$.value
    );
    
    
    console.warn('Autre Subscribe');
    this.behaviorSubject$.subscribe((data) => console.log(`Observer behavsubject 3 : ${data}`));
    
    console.warn('Next');
    this.behaviorSubject$.next('Second message');
  }
}
