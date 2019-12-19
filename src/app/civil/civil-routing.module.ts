import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CivilPage } from './civil.page';

const routes: Routes = [
  {
    path: '',
    component: CivilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CivilPageRoutingModule {}
