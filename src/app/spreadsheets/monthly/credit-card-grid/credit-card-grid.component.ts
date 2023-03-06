import {Component, Input} from '@angular/core';
import {CreditCard} from "../../model/monthly";

@Component({
  selector: 'app-credit-card-grid',
  templateUrl: './credit-card-grid.component.html',
  styleUrls: ['./credit-card-grid.component.scss']
})
export class CreditCardGridComponent {

  @Input() creditCards: CreditCard[] = [];

}
