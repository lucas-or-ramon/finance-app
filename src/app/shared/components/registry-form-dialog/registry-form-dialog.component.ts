import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {MonthlyService} from "../../../spreadsheets/services/monthly.service";
import {Registry} from "../../../spreadsheets/model/monthly";
import {ErrorDialogComponent} from "../error-dialog/error-dialog.component";


@Component({
  selector: 'app-registry-form-dialog',
  templateUrl: './registry-form-dialog.component.html',
  styleUrls: ['./registry-form-dialog.component.scss'],
})
export class RegistryFormDialogComponent implements OnInit {
  registryForm = new FormGroup({
    id: new FormControl("", {nonNullable: true}),
    date: new FormControl(1, {nonNullable: true}),
    value: new FormControl(0.0, {nonNullable: true}),
    description: new FormControl("", {nonNullable: true}),
    creditCardId: new FormControl("")
  });
  registryType: string
  days: number[] = []
  selectedDay: number

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<RegistryFormDialogComponent>,
              private monthlyService: MonthlyService,
              public dialog: MatDialog) {
    this.selectedDay = data.date.getDate()
    const numDays = new Date(data.date.getFullYear(), data.date.getMonth() + 1, 0).getDate();
    for (let day = 1; day < numDays + 1; day++) {
      this.days.push(day)
    }
    if (data.type === "edit") {
      this.registryForm.setValue({
        id: data.registry.id,
        date: this.selectedDay,
        value: data.registry.value,
        description: data.registry.description,
        creditCardId: data.registry.creditCardId
      })
    }
    this.registryType = data.registryType
  }

  ngOnInit(): void {}

  onCancelRegistry() {
    this.dialogRef.close()
  }

  onSubmitRegistry() {
    this.dialogRef.close()
    const observer = {
      next: () => "",
      error: () => this.dialog.open(ErrorDialogComponent, {data: "Erro ao Salvar"}),
      complete: () => this.dialog.open(ErrorDialogComponent, {data: "Sucesso ao Salvar"})
    }
    if (this.data.type === "edit") {
      this.monthlyService
        .update(this.getRegistryFromForm(), this.registryType)
        .subscribe(observer)
      console.log(this.getRegistryFromForm())
    } else {
      this.monthlyService
        .save(this.getRegistryFromForm(), this.registryType)
        .subscribe(observer)
      console.log(this.getRegistryFromForm())
    }
  }

  getRegistryFromForm(): Registry {
    const registryForm = this.registryForm.value;
    let id = ""
    if (this.data.type === "edit") {
      id = registryForm.id!
    }
    return {
      id: id,
      date: new Date(this.data.date.getFullYear(), this.data.date.getMonth(), registryForm.date),
      value: registryForm.value!,
      description: registryForm.description!,
      creditCardId: registryForm.creditCardId
    };
  }

  onDaySelect(day: number) {
    this.selectedDay = day;
  }
}
