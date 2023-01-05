import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { ActivatedRoute } from '@angular/router';

import { RecurrenceType, Registry, Status } from '../../model/monthly';
import { MonthlyService } from '../../services/monthly.service';

@Component({
  selector: 'app-revenue-form',
  templateUrl: './revenue-form.component.html',
  styleUrls: ['./revenue-form.component.scss']
})
export class RevenueFormComponent implements OnInit {

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
    const revenue: Registry = this.route.snapshot.data['revenue']
    this.form.setValue({
      id: revenue.id,
      date: revenue.date,
      value: revenue.value,
      status: revenue.status,
      finalDate: revenue.recurrence.finalDate,
      description: revenue.description,
      initialDate: revenue.recurrence.initialDate,
      recurrenceType: revenue.recurrence.type,
    })
  }

  onSubmitRevenue() {
    this.monthlyComponent.save(this.form.value, 'revenue').subscribe({
      next: () => this.onSuccess(),
      error: () => this.onError()
    });
  }

  onCancelRevenue() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open("Receita salva com sucesso", '', { duration: 3000 });
    this.onCancelRevenue();
  }

  private onError() {
    this.snackBar.open("Erro ao salvar receita", '', { duration: 3000 });
  }
}
