import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mech1PageRoutingModule } from './mech1-routing.module';

import { Mech1Page } from './mech1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mech1PageRoutingModule
  ],
  declarations: [Mech1Page]
})
export class Mech1PageModule {}
