import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { StatusPipe } from './pipes/status.pipe';
import { RecurrencePipe } from './pipes/recurrence.pipe';
import { ColorStatusPipe } from './pipes/color-status.pipe';
import { CurrentDatePipe } from './pipes/current-date.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    StatusPipe,
    RecurrencePipe,
    ColorStatusPipe,
    CurrentDatePipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [ErrorDialogComponent, StatusPipe, RecurrencePipe, ColorStatusPipe, CurrentDatePipe]
})
export class SharedModule { }
