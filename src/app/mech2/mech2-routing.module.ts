import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mech2Page } from './mech2.page';

const routes: Routes = [
  {
    path: '',
    component: Mech2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mech2PageRoutingModule {}
