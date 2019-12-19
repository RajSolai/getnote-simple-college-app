import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ece4PageRoutingModule } from './ece4-routing.module';

import { Ece4Page } from './ece4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ece4PageRoutingModule
  ],
  declarations: [Ece4Page]
})
export class Ece4PageModule {}
