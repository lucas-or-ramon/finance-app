import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Registry } from '../../model/monthly';
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
    description: new FormControl('', {nonNullable: true}),
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
      description: revenue.description,
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
