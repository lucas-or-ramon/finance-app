import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { RegistryListCardComponent } from "./components/registry-list-card/registry-list-card.component";
import { StatusPipe } from './pipes/status.pipe';
import { RecurrencePipe } from './pipes/recurrence.pipe';
import { ColorStatusPipe } from './pipes/color-status.pipe';
import { CurrentDatePipe } from './pipes/current-date.pipe';
import { RegistryListComponent } from './components/registry-list/registry-list.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    StatusPipe,
    RecurrencePipe,
    RegistryListCardComponent,
    RegistryListComponent,
    ColorStatusPipe,
    CurrentDatePipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [ErrorDialogComponent, StatusPipe, RecurrencePipe, RegistryListCardComponent, ColorStatusPipe, CurrentDatePipe, RegistryListComponent]
})
export class SharedModule { }
