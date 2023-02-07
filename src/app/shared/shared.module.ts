import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AppMaterialModule} from './app-material/app-material.module';
import {ErrorDialogComponent} from './components/error-dialog/error-dialog.component';
import {RegistryListCardComponent} from "./components/registry-list-card/registry-list-card.component";
import {StatusPipe} from './pipes/status.pipe';
import {RecurrencePipe} from './pipes/recurrence.pipe';
import {ColorStatusPipe} from './pipes/color-status.pipe';
import {CurrentDatePipe} from './pipes/current-date.pipe';
import {RegistryListComponent} from './components/registry-list/registry-list.component';
import {RegistryFormDialogComponent} from './components/registry-form-dialog/registry-form-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    ErrorDialogComponent,
    StatusPipe,
    RecurrencePipe,
    RegistryListCardComponent,
    RegistryListComponent,
    ColorStatusPipe,
    CurrentDatePipe,
    RegistryFormDialogComponent
  ],
    imports: [
        CommonModule,
        AppMaterialModule,
        ReactiveFormsModule,
        MatGridListModule
    ],
  exports: [ErrorDialogComponent, StatusPipe, RecurrencePipe, RegistryListCardComponent, ColorStatusPipe, CurrentDatePipe, RegistryListComponent, RegistryFormDialogComponent]
})
export class SharedModule { }
