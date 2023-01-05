import { MonthlyService } from '../services/monthly.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RecurrenceType, Registry, Status } from '../model/monthly';

@Injectable({
  providedIn: 'root'
})
export class MonthlyResolver implements Resolve<Registry> {

  constructor(private monthlyService: MonthlyService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Registry> {
    if (route.params && route.params['id']) {
      if (route.component?.name == "ExpenditureFormComponent") {
        return this.monthlyService.loadById(route.params['id'], 'expenditure');
      }

      if (route.component?.name == "RevenueFormComponent") {
        return this.monthlyService.loadById(route.params['id'], 'revenue');
      }

      if (route.component?.name == "CreditCardFormComponent") {
        return this.monthlyService.loadById(route.params['id'], 'credit-card-expenditure');
      }
    }
    return of({
      id: 0,
      date: new Date(),
      paid: 0,
      value: 0.0,
      total: 0,
      status: Status.PENDING,
      recurrence: {
        type: RecurrenceType.NORMAL,
        finalDate: new Date(),
        initialDate: new Date()
      },
      description: '',
      creationDate: new Date()
    });
  }
}
