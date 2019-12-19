import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mech4PageRoutingModule } from './mech4-routing.module';

import { Mech4Page } from './mech4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mech4PageRoutingModule
  ],
  declarations: [Mech4Page]
})
export class Mech4PageModule {}
