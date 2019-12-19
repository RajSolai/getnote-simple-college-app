import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Eee2PageRoutingModule } from './eee2-routing.module';

import { Eee2Page } from './eee2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Eee2PageRoutingModule
  ],
  declarations: [Eee2Page]
})
export class Eee2PageModule {}
