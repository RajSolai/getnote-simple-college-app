import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Civil2Page } from './civil2.page';

const routes: Routes = [
  {
    path: '',
    component: Civil2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Civil2PageRoutingModule {}
