import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { It4Page } from './it4.page';

const routes: Routes = [
  {
    path: '',
    component: It4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class It4PageRoutingModule {}
