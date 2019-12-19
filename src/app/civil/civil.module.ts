import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CivilPageRoutingModule } from './civil-routing.module';

import { CivilPage } from './civil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CivilPageRoutingModule
  ],
  declarations: [CivilPage]
})
export class CivilPageModule {}
