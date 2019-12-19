import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { It2Page } from './it2.page';

const routes: Routes = [
  {
    path: '',
    component: It2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class It2PageRoutingModule {}
