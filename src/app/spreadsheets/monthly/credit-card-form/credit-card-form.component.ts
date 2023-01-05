import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { ActivatedRoute } from '@angular/router';

import { RecurrenceType, Registry, Status } from '../../model/monthly';
import { MonthlyService } from '../../services/monthly.service';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {

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
    const creditCardExpenditure: Registry = this.route.snapshot.data['creditCardExpenditure']
    this.form.setValue({
      id: creditCardExpenditure.id,
      date: creditCardExpenditure.date,
      value: creditCardExpenditure.value,
      status: creditCardExpenditure.status,
      finalDate: creditCardExpenditure.recurrence.finalDate,
      description: creditCardExpenditure.description,
      initialDate: creditCardExpenditure.recurrence.initialDate,
      recurrenceType: creditCardExpenditure.recurrence.type,
    })
  }

  onSubmitCreditCardExpenditure() {
    this.monthlyComponent.save(this.form.value, 'credit-card-expenditure').subscribe({
      next: () => this.onSuccess(),
      error: () => this.onError()
    });
  }

  onCancelCreditCardExpenditure() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open("Despesa salva com sucesso", '', { duration: 3000 });
    this.onCancelCreditCardExpenditure();
  }

  private onError() {
    this.snackBar.open("Erro ao salvar Despesa", '', { duration: 3000 });
  }
}
