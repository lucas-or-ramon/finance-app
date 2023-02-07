import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Registry} from "../../../spreadsheets/model/monthly";

@Component({
  selector: 'app-registry-list-card',
  templateUrl: './registry-list-card.component.html',
  styleUrls: ['./registry-list-card.component.scss']
})
export class RegistryListCardComponent {
  @Input() registryType: string = "";
  @Input() cardRegistries: Registry[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  onAdd(registryType: string) {
    this.add.emit(registryType)
  }

  onEdit(registry: Registry) {
    this.edit.emit(registry);
  }
}
