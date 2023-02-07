import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {catchError, Observable, of} from 'rxjs';
import {ErrorDialogComponent} from 'src/app/shared/components/error-dialog/error-dialog.component';

import {Monthly, Registry} from '../model/monthly';
import {MonthlyService} from '../services/monthly.service';
import {RegistryFormDialogComponent} from "../../shared/components/registry-form-dialog/registry-form-dialog.component";

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  monthly$: Observable<Monthly>;
  years: number[]
  selectedYear: number
  months: number[]
  selectedMonth: number

  constructor(private monthlyService: MonthlyService, public dialog: MatDialog) {
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    this.selectedYear = year
    this.selectedMonth = month
    this.years = [2021, 2022, 2023]
    this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    this.monthly$ = this.callMonthService()
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  ngOnInit(): void {}

  onYearSelect(year: number) {
    this.selectedYear = year
  }

  onMonthSelect(month: number) {
    this.selectedMonth = month
  }

  queryMonthAndYear() {
    this.monthly$ = this.callMonthService()
    this.
  }

  callMonthService(): Observable<Monthly> {
    return this.monthlyService.getMonthlyResume(this.selectedYear, this.selectedMonth)
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar resumo mensal')
          return of()
        })
      );
  }
}
