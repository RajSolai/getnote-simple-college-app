import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mech3Page } from './mech3.page';

const routes: Routes = [
  {
    path: '',
    component: Mech3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mech3PageRoutingModule {}
