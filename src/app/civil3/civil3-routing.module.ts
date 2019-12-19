import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Civil3Page } from './civil3.page';

const routes: Routes = [
  {
    path: '',
    component: Civil3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Civil3PageRoutingModule {}
