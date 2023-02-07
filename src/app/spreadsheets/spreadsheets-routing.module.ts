import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MonthlyComponent} from './monthly/monthly.component';

const routes: Routes = [
  { path: '', component: MonthlyComponent },
  { path: 'monthly', component: MonthlyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpreadsheetsRoutingModule { }
