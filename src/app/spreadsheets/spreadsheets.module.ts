import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { MonthlyComponent } from './monthly/monthly.component';
import { SpreadsheetsRoutingModule } from './spreadsheets-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from "@angular/material/divider";
import {FlexModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDialogModule} from "@angular/material/dialog";
import { RevenueExpenditureGridComponent } from './monthly/revenue-expenditure-grid/revenue-expenditure-grid.component';

@NgModule({
  declarations: [
    MonthlyComponent,
    RevenueExpenditureGridComponent
  ],
  imports: [
    CommonModule,
    SpreadsheetsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    MatDividerModule,
    FlexModule,
    MatGridListModule,
    MatDialogModule
  ]
})
export class SpreadsheetsModule { }
