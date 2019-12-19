import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgriPage } from './agri.page';

const routes: Routes = [
  {
    path: '',
    component: AgriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgriPageRoutingModule {}
