import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cse3Page } from './cse3.page';

const routes: Routes = [
  {
    path: '',
    component: Cse3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cse3PageRoutingModule {}
