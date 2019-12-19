import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Eie4PageRoutingModule } from './eie4-routing.module';

import { Eie4Page } from './eie4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Eie4PageRoutingModule
  ],
  declarations: [Eie4Page]
})
export class Eie4PageModule {}
