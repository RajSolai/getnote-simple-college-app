import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EeePage } from './eee.page';

const routes: Routes = [
  {
    path: '',
    component: EeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EeePageRoutingModule {}
