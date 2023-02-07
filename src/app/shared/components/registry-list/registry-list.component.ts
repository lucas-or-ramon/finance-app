import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Registry, RegistryType} from "../../../spreadsheets/model/monthly";
import {MatDialog} from "@angular/material/dialog";
import {RegistryFormDialogComponent} from "../registry-form-dialog/registry-form-dialog.component";

@Component({
  selector: 'app-registry-list',
  templateUrl: './registry-list.component.html',
  styleUrls: ['./registry-list.component.scss']
})
export class RegistryListComponent {

  @Input() registryType: string = "";
  @Input() registries: Registry[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  readonly displayedColumns = ['date', 'description', 'value', 'actions'];

  onAdd(): void {
    this.add.emit(this.registryType);
  }

  onEdit(registry: Registry): void {
    this.edit.emit(registry);
  }
}
