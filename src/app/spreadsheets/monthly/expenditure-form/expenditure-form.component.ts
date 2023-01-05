import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { ActivatedRoute } from '@angular/router';

import { RecurrenceType, Registry, Status } from '../../model/monthly';
import { MonthlyService } from '../../services/monthly.service';

@Component({
  selector: 'app-expenditure-form',
  templateUrl: './expenditure-form.component.html',
  styleUrls: ['./expenditure-form.component.scss']
})
export class ExpenditureFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: new FormControl(0),
    date: new FormControl(new Date(), {nonNullable: true}),
    value: new FormControl(0, {nonNullable: true}),
    status: new FormControl(Status.PENDING, {nonNullable: true}),
    finalDate: new FormControl(new Date()),
    description: new FormControl('', {nonNullable: true}),
    initialDate: new FormControl(new Date()),
    recurrenceType: new FormControl(RecurrenceType.NORMAL, {nonNullable: true}),
  });

  constructor(
    private formBuilder: FormBuilder,
    private monthlyComponent: MonthlyService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const expenditure: Registry = this.route.snapshot.data['expenditure']
    this.form.setValue({
      id: expenditure.id,
      date: expenditure.date,
      value: expenditure.value,
      status: expenditure.status,
      finalDate: expenditure.recurrence.finalDate,
      description: expenditure.description,
      initialDate: expenditure.recurrence.initialDate,
      recurrenceType: expenditure.recurrence.type,
    })
  }

  onSubmitExpenditure() {
    this.monthlyComponent.save(this.form.value, 'expenditure').subscribe({
      next: () => this.onSuccess(),
      error: () => this.onError()
    });
  }

  onCancelExpenditure() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open("Despesa salva com sucesso", '', { duration: 3000 });
    this.onCancelExpenditure();
  }

  private onError() {
    this.snackBar.open("Erro ao salvar despesa", '', { duration: 3000 });
  }
}
