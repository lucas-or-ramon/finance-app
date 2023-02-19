import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MonthlyService} from "../../../spreadsheets/services/monthly.service";
import {Registry} from "../../../spreadsheets/model/monthly";
import {ErrorDialogComponent} from "../error-dialog/error-dialog.component";

@Component({
  selector: 'app-registry-delete-dialog',
  templateUrl: './registry-delete-dialog.component.html',
  styleUrls: ['./registry-delete-dialog.component.scss']
})
export class RegistryDeleteDialogComponent {

  registryType: string
  registry: Registry

  constructor(@Inject(MAT_DIALOG_DATA) data: any,
              private dialogRef: MatDialogRef<RegistryDeleteDialogComponent>,
              private monthlyService: MonthlyService,
              public dialog: MatDialog) {
    this.registry = data.registry
    this.registryType = data.registryType
    console.log("Aberto")
  }

  onDeleteRegistry() {
    this.dialogRef.close()
    const observer = {
      next: () => "",
      error: () => this.dialog.open(ErrorDialogComponent, {data: "Erro ao Deletar"}),
      complete: () => this.dialog.open(ErrorDialogComponent, {data: "Deletado"})
    }
    this.monthlyService
      .delete(this.registry.id, this.registryType)
      .subscribe(observer)
  }

  onCancelDelete() {
    this.dialogRef.close()
  }
}
