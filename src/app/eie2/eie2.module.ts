import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Eie2PageRoutingModule } from './eie2-routing.module';

import { Eie2Page } from './eie2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Eie2PageRoutingModule
  ],
  declarations: [Eie2Page]
})
export class Eie2PageModule {}
