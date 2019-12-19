import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Eee1PageRoutingModule } from './eee1-routing.module';

import { Eee1Page } from './eee1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Eee1PageRoutingModule
  ],
  declarations: [Eee1Page]
})
export class Eee1PageModule {}
