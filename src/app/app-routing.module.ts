import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: `monthly`},
  {
    path: `monthly`,
    loadChildren: () => import('./spreadsheets/spreadsheets.module').then(m => m.SpreadsheetsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
