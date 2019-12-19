import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ece1Page } from './ece1.page';

const routes: Routes = [
  {
    path: '',
    component: Ece1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ece1PageRoutingModule {}
