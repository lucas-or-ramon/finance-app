import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {MonthlyService} from "../../../spreadsheets/services/monthly.service";
import {Registry} from "../../../spreadsheets/model/monthly";
import {ErrorDialogComponent} from "../error-dialog/error-dialog.component";


@Component({
  selector: 'app-registry-form',
  templateUrl: './registry-form.component.html',
  styleUrls: ['./registry-form.component.scss'],
})
export class RegistryFormComponent implements OnInit {
  registryForm = new FormGroup({
    id: new FormControl("", {nonNullable: true}),
    date: new FormGroup({
      year: new FormControl(2023, {nonNullable: true}),
      month: new FormControl(4, {nonNullable: true}),
    }),
    value: new FormControl(0.0, {nonNullable: true}),
    category: new FormControl("", {nonNullable: true}),
    description: new FormControl("", {nonNullable: true}),
    recurrence: new FormGroup({
      type: new FormControl("", {nonNullable: true}),
      dueDate: new FormControl(1, {nonNullable: true}),
      start: new FormControl(1, {nonNullable: true}),
      end: new FormControl(1, {nonNullable: true}),
    }),
    creditCardId: new FormControl("")
  });

  registryType: string
  days: number[] = []
  selectedDay: number

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<RegistryFormComponent>,
              private monthlyService: MonthlyService,
              public dialog: MatDialog) {
    this.selectedDay = data.date.getDate()
    const numDays = new Date(data.date.getFullYear(), data.date.getMonth() + 1, 0).getDate();
    for (let day = 1; day < numDays + 1; day++) {
      this.days.push(day)
    }

    console.log(data.registry)
    let creditCardId = ""
    if (data.registry !== undefined && data.registry.creditCardId !== undefined) {
      creditCardId = data.registry.creditCardId;
    }

    if (data.type === "edit") {
      this.registryForm.setValue({
        id: data.registry.id,
        date: {
          year: data.registry.date.getFullYear(),
          month: data.registry.date.getMonth() + 1
        },
        value: data.registry.value,
        category: data.registry.category,
        recurrence: {
          type: data.registry.recurrence.type,
          dueDate: data.registry.recurrence.dueDate,
          start: data.registry.recurrence.start,
          end: data.registry.recurrence.end
        },
        description: data.registry.description,
        creditCardId: creditCardId
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
      value: registryForm.value!,
      category: registryForm.category!,
      recurrence: {
        type: registryForm.recurrence!.type!,
        dueDate: registryForm.recurrence!.dueDate!,
        start: {year: registryForm.date!.year!, month: registryForm.date!.month!},
        end: {year: registryForm.date!.year!, month: registryForm.date!.month!}
      },
      description: registryForm.description!,
      creditCardId: registryForm.creditCardId
    };
  }

  onDaySelect(day: number) {
    this.selectedDay = day;
  }
}
