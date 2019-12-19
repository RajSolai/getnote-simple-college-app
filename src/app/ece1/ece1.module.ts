import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ece1PageRoutingModule } from './ece1-routing.module';

import { Ece1Page } from './ece1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ece1PageRoutingModule
  ],
  declarations: [Ece1Page]
})
export class Ece1PageModule {}
