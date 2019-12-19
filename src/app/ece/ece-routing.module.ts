import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcePage } from './ece.page';

const routes: Routes = [
  {
    path: '',
    component: EcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcePageRoutingModule {}
