import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Eee3Page } from './eee3.page';

const routes: Routes = [
  {
    path: '',
    component: Eee3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Eee3PageRoutingModule {}
