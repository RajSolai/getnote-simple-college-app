import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Civil1Page } from './civil1.page';

const routes: Routes = [
  {
    path: '',
    component: Civil1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Civil1PageRoutingModule {}
