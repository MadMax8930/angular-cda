import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(item: Order, isTtc?: boolean): number {
    if(isTtc) {
      // return order.tjmHt * (1 + order.tva/100) * order.nbJours; // V1
      return item.totalTtc();
    }
    // return order.tjmHt * order.nbJours;// V1
    return item.totalHt();
  }
}
