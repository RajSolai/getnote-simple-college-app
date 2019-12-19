import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Eie3Page } from './eie3.page';

const routes: Routes = [
  {
    path: '',
    component: Eie3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Eie3PageRoutingModule {}
