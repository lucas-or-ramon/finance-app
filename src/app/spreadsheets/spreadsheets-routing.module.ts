import { CreditCardFormComponent } from './monthly/credit-card-form/credit-card-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonthlyResolver } from './guards/monthly.resolver';
import { ExpenditureFormComponent } from './monthly/expenditure-form/expenditure-form.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { RevenueFormComponent } from './monthly/revenue-form/revenue-form.component';

const routes: Routes = [
  { path: '', component: MonthlyComponent },
  { path: 'new-revenue', component: RevenueFormComponent, resolve: { revenue: MonthlyResolver } },
  { path: 'edit-revenue/:id', component: RevenueFormComponent, resolve: { revenue: MonthlyResolver } },
  { path: 'new-expenditure', component: ExpenditureFormComponent, resolve: { expenditure: MonthlyResolver } },
  { path: 'edit-expenditure/:id', component: ExpenditureFormComponent, resolve: { expenditure: MonthlyResolver } },
  { path: 'new-credit-card-expenditure', component: CreditCardFormComponent, resolve: { creditCardExpenditure: MonthlyResolver } },
  { path: 'edit-credit-card-expenditure/:id', component: CreditCardFormComponent, resolve: { creditCardExpenditure: MonthlyResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpreadsheetsRoutingModule { }
