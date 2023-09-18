import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hist-order-item',
  templateUrl: './hist-order-item.component.html',
  styleUrls: ['./hist-order-item.component.scss']
})
export class HistOrderItemComponent {

  @Input() payment: string = '';

  @Input() data: any;

}
