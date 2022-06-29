import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'simplon-commande';

  constructor(private router: Router){
    console.log(this.router.config);
  }
  ngDoCheck(): void {
    console.warn('Check APP')
  }

}
