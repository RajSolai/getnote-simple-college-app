import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mech2PageRoutingModule } from './mech2-routing.module';

import { Mech2Page } from './mech2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mech2PageRoutingModule
  ],
  declarations: [Mech2Page]
})
export class Mech2PageModule {}
