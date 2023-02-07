import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Registry} from "../../model/monthly";
import {catchError, Observable, of} from "rxjs";
import {MonthlyService} from "../../services/monthly.service";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../../shared/components/error-dialog/error-dialog.component";
import {
  RegistryFormDialogComponent
} from "../../../shared/components/registry-form-dialog/registry-form-dialog.component";

@Component({
  selector: 'app-revenue-expenditure-grid',
  templateUrl: './revenue-expenditure-grid.component.html',
  styleUrls: ['./revenue-expenditure-grid.component.scss']
})
export class RevenueExpenditureGridComponent {

  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Input() selectedYear: number = new Date().getFullYear()
  @Input() selectedMonth: number = new Date().getMonth() + 1
  revenues$: Observable<Registry[]>
  expenditures$: Observable<Registry[]>

  constructor(private monthlyService: MonthlyService, public dialog: MatDialog) {
    this.revenues$ = this.getMonthlyRevenues()
    this.expenditures$ = this.getMonthlyExpenditures()
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

  queryMonthAndYear() {
    this.revenues$ = this.getMonthlyRevenues()
    this.expenditures$ = this.getMonthlyExpenditures()
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  onAdd(registryType: string) {
    console.log(registryType)
    this.dialog.open(RegistryFormDialogComponent, {
      data: registryType
    });
  }

  onEdit(registry: Registry) {
    this.dialog.open(RegistryFormDialogComponent, {
      data: registry
    })
  }
}
