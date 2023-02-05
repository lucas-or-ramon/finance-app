import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonthlyResolver } from './guards/monthly.resolver';
import { MonthlyComponent } from './monthly/monthly.component';
import { RevenueFormComponent } from './monthly/revenue-form/revenue-form.component';

const routes: Routes = [
  { path: '', component: MonthlyComponent },
  { path: 'new-revenue', component: RevenueFormComponent, resolve: { revenue: MonthlyResolver } },
  { path: 'edit-revenue/:id', component: RevenueFormComponent, resolve: { revenue: MonthlyResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpreadsheetsRoutingModule { }
