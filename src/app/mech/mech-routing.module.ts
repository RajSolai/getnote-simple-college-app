import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MechPage } from './mech.page';

const routes: Routes = [
  {
    path: '',
    component: MechPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MechPageRoutingModule {}
