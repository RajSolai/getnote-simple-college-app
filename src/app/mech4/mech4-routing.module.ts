import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mech4Page } from './mech4.page';

const routes: Routes = [
  {
    path: '',
    component: Mech4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mech4PageRoutingModule {}
