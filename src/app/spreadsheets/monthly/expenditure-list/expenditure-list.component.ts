import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Expenditure, Revenue } from '../../model/monthly';

@Component({
  selector: 'app-expenditure-list',
  templateUrl: './expenditure-list.component.html',
  styleUrls: ['./expenditure-list.component.scss']
})
export class ExpenditureListComponent implements OnInit {

  @Input() expenditures: Expenditure[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['date', 'description', 'status', 'value', 'recurrence', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit();
  }

  onEdit(expenditure: Expenditure) {
    this.edit.emit(expenditure);
  }

}
