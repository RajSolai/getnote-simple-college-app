import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItPage } from './it.page';

const routes: Routes = [
  {
    path: '',
    component: ItPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItPageRoutingModule {}
