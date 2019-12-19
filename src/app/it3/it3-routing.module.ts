import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { It3Page } from './it3.page';

const routes: Routes = [
  {
    path: '',
    component: It3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class It3PageRoutingModule {}
