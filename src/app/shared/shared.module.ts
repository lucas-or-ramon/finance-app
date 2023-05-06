import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AppMaterialModule} from './app-material/app-material.module';
import {ErrorDialogComponent} from './components/error-dialog/error-dialog.component';
import {StatusPipe} from './pipes/status.pipe';
import {RecurrencePipe} from './pipes/recurrence.pipe';
import {ColorStatusPipe} from './pipes/color-status.pipe';
import {CurrentDatePipe} from './pipes/current-date.pipe';
import {RegistryFormComponent} from './components/registry-form/registry-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {RegistryDeleteDialogComponent} from './components/registry-delete-dialog/registry-delete-dialog.component';
import {MonthNamePipe} from './pipes/month-name.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    StatusPipe,
    MonthNamePipe,
    RecurrencePipe,
    ColorStatusPipe,
    CurrentDatePipe,
    RegistryFormComponent,
    RegistryDeleteDialogComponent,
    MonthNamePipe
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
    MonthNamePipe,
    RecurrencePipe,
    ColorStatusPipe,
    CurrentDatePipe,
    RegistryFormComponent,
    RegistryDeleteDialogComponent]
})
export class SharedModule {
}
