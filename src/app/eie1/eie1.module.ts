import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Eie1PageRoutingModule } from './eie1-routing.module';

import { Eie1Page } from './eie1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Eie1PageRoutingModule
  ],
  declarations: [Eie1Page]
})
export class Eie1PageModule {}
