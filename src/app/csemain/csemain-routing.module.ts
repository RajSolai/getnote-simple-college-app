import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsemainPage } from './csemain.page';

const routes: Routes = [
  {
    path: '',
    component: CsemainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsemainPageRoutingModule {}
