import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EiePage } from './eie.page';

const routes: Routes = [
  {
    path: '',
    component: EiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EiePageRoutingModule {}
