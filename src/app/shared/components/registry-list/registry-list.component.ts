import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Registry} from "../../../spreadsheets/model/monthly";

@Component({
  selector: 'app-registry-list',
  templateUrl: './registry-list.component.html',
  styleUrls: ['./registry-list.component.scss']
})
export class RegistryListComponent {

  @Input() registries: Registry[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['date', 'description', 'value', 'actions'];

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(registry: Registry) {
    this.edit.emit(registry);
  }
}
