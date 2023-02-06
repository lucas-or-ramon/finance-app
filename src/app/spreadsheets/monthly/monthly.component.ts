import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, Observable, of} from 'rxjs';
import {ErrorDialogComponent} from 'src/app/shared/components/error-dialog/error-dialog.component';

import {Monthly, Registry, Revenue} from '../model/monthly';
import {MonthlyService} from '../services/monthly.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  monthly$: Observable<Monthly>;
  revenues$: Observable<Registry[]>
  expenditures$: Observable<Registry[]>
  years: number[]
  selectedYear: number
  months: number[]
  selectedMonth: number

  constructor(
    private monthlyService: MonthlyService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    this.selectedYear = year
    this.selectedMonth = month
    this.years = [2021, 2022, 2023]
    this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    this.monthly$ = this.callMonthService()
    this.revenues$ = this.getMonthlyRevenues()
    this.expenditures$ = this.getMonthlyExpenditures()
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  ngOnInit(): void {}

  onAdd(type: string) {
    this.router.navigate([`new-${type}`], {relativeTo: this.route})
  }

  onEdit(registry: Registry, type: string) {
    this.router.navigate([`edit-${type}`, registry.id], {relativeTo: this.route})
  }

  onYearSelect(year: number) {
    this.selectedYear = year
  }

  onMonthSelect(month: number) {
    this.selectedMonth = month
  }

  queryMonthAndYear() {
    this.monthly$ = this.callMonthService()
    this.revenues$ = this.getMonthlyRevenues()
    this.expenditures$ = this.getMonthlyExpenditures()
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

  private getMonthlyRevenues(): Observable<Registry[]> {
    return this.monthlyService.getMonthlyRevenues(this.selectedYear, this.selectedMonth)
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar resumo mensal')
          return of()
        })
      );
  }

  private getMonthlyExpenditures(): Observable<Registry[]>{
    return this.monthlyService.getMonthlyExpenditures(this.selectedYear, this.selectedMonth)
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar resumo mensal')
          return of()
        })
      );
  }
}
