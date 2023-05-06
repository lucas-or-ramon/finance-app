import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {catchError, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ErrorDialogComponent} from 'src/app/shared/components/error-dialog/error-dialog.component';

import {FinanceDate, Monthly} from '../model/monthly';
import {MonthlyService} from '../services/monthly.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  readonly years: number[] = [2021, 2022, 2023, 2024, 2025, 2026]
  readonly months: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  readonly displayedColumns: string[] = ['category', 'date', 'recurrence', 'description', 'value', 'actions'];

  monthly$: Observable<Monthly | null> = of(null)
  selectedYear: number = new Date().getFullYear();
  selectedMonth: number = new Date().getMonth();

  constructor(private monthlyService: MonthlyService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.monthly$ = this.callMonthService()
  }

  onYearSelect(year: number) {
    this.selectedYear = year
  }

  onMonthSelect(month: number) {
    this.selectedMonth = month
  }

  queryMonthAndYear() {
    this.monthly$ = this.callMonthService()
  }

  callMonthService(): Observable<Monthly | null> {
    const date: FinanceDate = {year: this.selectedYear, month: this.selectedMonth + 1};
    return this.monthlyService.getMonthlyResume(date)
      .pipe(
        map((monthly: Monthly) => {
          console.log(monthly)
          return monthly;
        }),
        catchError((err: any) => {
          console.log(err);
          return of(null);
        })
      );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
}
