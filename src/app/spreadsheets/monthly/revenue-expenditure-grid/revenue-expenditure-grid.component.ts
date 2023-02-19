import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CreditCard, Registry} from "../../model/monthly";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../../shared/components/error-dialog/error-dialog.component";
import {
  RegistryFormDialogComponent
} from "../../../shared/components/registry-form-dialog/registry-form-dialog.component";
import {
  RegistryDeleteDialogComponent
} from "../../../shared/components/registry-delete-dialog/registry-delete-dialog.component";

@Component({
  selector: 'app-revenue-expenditure-grid',
  templateUrl: './revenue-expenditure-grid.component.html',
  styleUrls: ['./revenue-expenditure-grid.component.scss']
})
export class RevenueExpenditureGridComponent implements OnInit {

  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Input() selectedYear: number = new Date().getFullYear();
  @Input() selectedMonth: number = new Date().getMonth() + 1;
  @Input() revenue: {total: number, registries: Registry[]} = { total:0.0, registries: []};
  @Input() expenditure: {total: number, registries: Registry[]} = { total:0.0, registries: []};
  @Input() creditCards: CreditCard[] = [];

  constructor( public dialog: MatDialog) {}

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  onAdd(registryType: string) {
    console.log(this.selectedMonth)
    console.log(this.selectedYear)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      type: "add",
      registryType: registryType,
      date: new Date(this.selectedYear, this.selectedMonth - 1, 1)
    }
    this.dialog.open(RegistryFormDialogComponent, dialogConfig);
  }

  onEdit(event: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      type: "edit",
      registry: event.registry,
      registryType: event.registryType,
      date: new Date(this.selectedYear, this.selectedMonth - 1,  new Date(event.registry.date).getDate() + 1)
    }
    this.dialog.open(RegistryFormDialogComponent, dialogConfig);
  }

  onDelete(event: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      type: "delete",
      registry: event.registry,
      registryType: event.registryType
    }
    this.dialog.open(RegistryDeleteDialogComponent, dialogConfig);
  }

  ngOnInit(): void {}
}
