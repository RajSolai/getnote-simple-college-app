import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cse2Page } from './cse2.page';

const routes: Routes = [
  {
    path: '',
    component: Cse2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cse2PageRoutingModule {}
