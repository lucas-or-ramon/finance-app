import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreditCard, CreditCardExpenditure } from '../../model/monthly';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss']
})
export class CreditCardListComponent implements OnInit {

  @Input() creditCardExpenditures: CreditCardExpenditure[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['description', 'status', 'value', 'recurrence', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(revenue: CreditCardExpenditure) {
    this.edit.emit(revenue);
  }
}
