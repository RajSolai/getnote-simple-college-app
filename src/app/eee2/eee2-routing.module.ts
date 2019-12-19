import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Eee2Page } from './eee2.page';

const routes: Routes = [
  {
    path: '',
    component: Eee2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Eee2PageRoutingModule {}
