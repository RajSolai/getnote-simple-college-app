import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ece2Page } from './ece2.page';

const routes: Routes = [
  {
    path: '',
    component: Ece2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ece2PageRoutingModule {}
