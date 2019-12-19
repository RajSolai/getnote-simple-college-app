import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ece4Page } from './ece4.page';

const routes: Routes = [
  {
    path: '',
    component: Ece4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ece4PageRoutingModule {}
