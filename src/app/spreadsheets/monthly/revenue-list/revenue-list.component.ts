import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Revenue } from '../../model/monthly';

@Component({
  selector: 'app-revenue-list',
  templateUrl: './revenue-list.component.html',
  styleUrls: ['./revenue-list.component.scss']
})
export class RevenueListComponent implements OnInit {

  @Input() revenues: Revenue[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['date', 'description', 'status', 'value', 'recurrence', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(revenue: Revenue) {
    this.edit.emit(revenue);
  }
}
