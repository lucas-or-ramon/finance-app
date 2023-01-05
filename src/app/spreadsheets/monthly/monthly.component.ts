import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Monthly, Registry } from '../model/monthly';
import { MonthlyService } from '../services/monthly.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  monthly$: Observable<Monthly>;

  constructor(
    private monthlyService: MonthlyService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.monthly$ = this.monthlyService.getMonthlyResume()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar resumo mensal')
          return of()
        })
      );
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

  onLastMonth() {

  }

  onLaterMonth() {

  }

}
