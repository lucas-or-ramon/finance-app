import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { MonthlyComponent } from './monthly/monthly.component';
import { SpreadsheetsRoutingModule } from './spreadsheets-routing.module';
import { RevenueFormComponent } from './monthly/revenue-form/revenue-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RevenueListComponent } from './monthly/revenue-list/revenue-list.component';
import { ExpenditureFormComponent } from './monthly/expenditure-form/expenditure-form.component';
import { ExpenditureListComponent } from './monthly/expenditure-list/expenditure-list.component';
import { CreditCardFormComponent } from './monthly/credit-card-form/credit-card-form.component';
import { CreditCardListComponent } from './monthly/credit-card-list/credit-card-list.component';

@NgModule({
  declarations: [
    MonthlyComponent,
    RevenueFormComponent,
    RevenueListComponent,
    ExpenditureFormComponent,
    ExpenditureListComponent,
    CreditCardFormComponent,
    CreditCardListComponent
  ],
  imports: [
    CommonModule,
    SpreadsheetsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SpreadsheetsModule { }
