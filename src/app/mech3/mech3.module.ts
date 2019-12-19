import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mech3PageRoutingModule } from './mech3-routing.module';

import { Mech3Page } from './mech3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mech3PageRoutingModule
  ],
  declarations: [Mech3Page]
})
export class Mech3PageModule {}
