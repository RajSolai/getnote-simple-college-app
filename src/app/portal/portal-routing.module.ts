import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalPage } from './portal.page';

const routes: Routes = [
  {
    path: '',
    component: PortalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalPageRoutingModule {}
