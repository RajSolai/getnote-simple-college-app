import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cse4Page } from './cse4.page';

const routes: Routes = [
  {
    path: '',
    component: Cse4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cse4PageRoutingModule {}
