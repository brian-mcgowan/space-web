import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// noinspection ES6PreferShortImport
import { PointDropperComponent } from './point-dropper.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PointDropperComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointDropperRoutingModule { }
