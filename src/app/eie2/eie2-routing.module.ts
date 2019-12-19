import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Eie2Page } from './eie2.page';

const routes: Routes = [
  {
    path: '',
    component: Eie2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Eie2PageRoutingModule {}
