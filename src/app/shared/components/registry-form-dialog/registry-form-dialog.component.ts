import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {MonthlyService} from "../../../spreadsheets/services/monthly.service";
import {Registry, RegistryType} from "../../../spreadsheets/model/monthly";
import {ErrorDialogComponent} from "../error-dialog/error-dialog.component";

@Component({
  selector: 'app-registry-form-dialog',
  templateUrl: './registry-form-dialog.component.html',
  styleUrls: ['./registry-form-dialog.component.scss']
})
export class RegistryFormDialogComponent implements OnInit {
  registryForm = new FormGroup({
    id: new FormControl(0.0, {nonNullable: true}),
    date: new FormControl(new Date(), {nonNullable: true}),
    value: new FormControl(0.0, {nonNullable: true}),
    description: new FormControl("", {nonNullable: true})
  });

  constructor(@Inject(MAT_DIALOG_DATA) public registryType: RegistryType,
              private dialogRef: MatDialogRef<RegistryFormDialogComponent>,
              private monthlyService: MonthlyService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {}

  onCancelRegistry() {
    this.dialogRef.close()
  }

  onSubmitRegistry() {
    this.dialogRef.close()
    const observer = {
      next: () => "",
      error: () => this.dialog.open(ErrorDialogComponent, {data: "Sucesso ao Salvar"}),
      complete: () => this.dialog.open(ErrorDialogComponent, {data: "Sucesso ao Salvar"})
    }
    this.monthlyService
      .save(this.getRegistryFromForm(), this.registryType)
      .subscribe(observer)
  }

  getRegistryFromForm(): Registry {
    const registry = this.registryForm.value;
    return {id: '', date: registry.date!, value: registry.value!, description: registry.description!};
  }
}
