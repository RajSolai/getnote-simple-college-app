import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Eee1Page } from './eee1.page';

const routes: Routes = [
  {
    path: '',
    component: Eee1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Eee1PageRoutingModule {}
