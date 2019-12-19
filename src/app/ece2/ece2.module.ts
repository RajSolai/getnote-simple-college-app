import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ece2PageRoutingModule } from './ece2-routing.module';

import { Ece2Page } from './ece2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ece2PageRoutingModule
  ],
  declarations: [Ece2Page]
})
export class Ece2PageModule {}
