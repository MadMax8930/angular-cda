import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit, OnChanges {
  @Input() public title!: {label: string};
  constructor() { 
    // this.title = {
    //   label: "Le titre est ici"
    // };
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges : `,changes);
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.warn('Check TEMPLATE FW')
  }

}
