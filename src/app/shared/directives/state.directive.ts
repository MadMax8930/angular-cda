import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;

  constructor() { }

  ngOnChanges(): void {
    console.log(this.appState);
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }


}
