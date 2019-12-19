import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Eee4PageRoutingModule } from './eee4-routing.module';

import { Eee4Page } from './eee4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Eee4PageRoutingModule
  ],
  declarations: [Eee4Page]
})
export class Eee4PageModule {}
