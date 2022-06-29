import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentDate = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.warn('Check HEADER')
  }

}
