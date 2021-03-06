import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI{
    tjmHt = 400;
    nbJours = 1;
    tva = 20;
    state =  StateOrder.OPTION;
    typePresta!: string;
    client!: string;
    comment!: string;
    id!: number;

    constructor(obj?: Partial<Order>){
        if(obj){
            Object.assign(this, obj);
        }
    }

    totalHt(): number {
        return this.tjmHt * this.nbJours;
    }
    
    totalTtc(): number {
        return this.tjmHt * (1 + this.tva / 100 ) * this.nbJours;
    }
}
