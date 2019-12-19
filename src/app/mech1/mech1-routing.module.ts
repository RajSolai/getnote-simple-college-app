import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mech1Page } from './mech1.page';

const routes: Routes = [
  {
    path: '',
    component: Mech1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mech1PageRoutingModule {}
