import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Eee4Page } from './eee4.page';

const routes: Routes = [
  {
    path: '',
    component: Eee4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Eee4PageRoutingModule {}
