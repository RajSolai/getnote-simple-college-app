import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MechPageRoutingModule } from './mech-routing.module';

import { MechPage } from './mech.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MechPageRoutingModule
  ],
  declarations: [MechPage]
})
export class MechPageModule {}
