import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ece3Page } from './ece3.page';

const routes: Routes = [
  {
    path: '',
    component: Ece3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ece3PageRoutingModule {}
