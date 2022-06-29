import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit, OnChanges {
  @Input() init!: Order;
  @Output() submitted = new EventEmitter<Order>();
  public states = StateOrder; 
  public formAddOrder!: FormGroup; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.formAddOrder = this.fb.group({
      typePresta: [this.init.typePresta],
      client: [this.init.client],
      nbJours: [this.init.nbJours],
      tjmHt: [this.init.tjmHt],
      tva: [this.init.tva],
      state: [this.init.state],
      comment: [this.init.comment],
      id: [this.init.id]
    })
  }

  onSubmit(){
    this.submitted.emit(this.formAddOrder.value);
  }

}
