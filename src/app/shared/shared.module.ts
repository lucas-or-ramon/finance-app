import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AppMaterialModule} from './app-material/app-material.module';
import {ErrorDialogComponent} from './components/error-dialog/error-dialog.component';
import {StatusPipe} from './pipes/status.pipe';
import {RecurrencePipe} from './pipes/recurrence.pipe';
import {ColorStatusPipe} from './pipes/color-status.pipe';
import {CurrentDatePipe} from './pipes/current-date.pipe';
import {RegistryListComponent} from '../spreadsheets/monthly/registry-list/registry-list.component';
import {RegistryFormDialogComponent} from './components/registry-form-dialog/registry-form-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import { RegistryDeleteDialogComponent } from './components/registry-delete-dialog/registry-delete-dialog.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    StatusPipe,
    RecurrencePipe,
    RegistryListComponent,
    ColorStatusPipe,
    CurrentDatePipe,
    RegistryFormDialogComponent,
    RegistryDeleteDialogComponent
  ],
    imports: [
        CommonModule,
        AppMaterialModule,
        ReactiveFormsModule,
        MatGridListModule
    ],
  exports: [
    ErrorDialogComponent,
    StatusPipe,
    RecurrencePipe,
    ColorStatusPipe,
    CurrentDatePipe,
    RegistryListComponent,
    RegistryFormDialogComponent,
    RegistryDeleteDialogComponent]
})
export class SharedModule { }
