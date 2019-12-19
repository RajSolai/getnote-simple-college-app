import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cse1Page } from './cse1.page';

const routes: Routes = [
  {
    path: '',
    component: Cse1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cse1PageRoutingModule {}
