import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: `monthly/${new Date().getFullYear()}/${new Date().getMonth() + 1}`},
  {
    path: `monthly/${new Date().getFullYear()}/${new Date().getMonth() + 1}`,
    loadChildren: () => import('./spreadsheets/spreadsheets.module').then(m => m.SpreadsheetsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
