import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Eie1Page } from './eie1.page';

const routes: Routes = [
  {
    path: '',
    component: Eie1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Eie1PageRoutingModule {}
