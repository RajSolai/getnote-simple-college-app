import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { It1Page } from './it1.page';

const routes: Routes = [
  {
    path: '',
    component: It1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class It1PageRoutingModule {}
