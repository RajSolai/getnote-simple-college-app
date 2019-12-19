import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Civil2PageRoutingModule } from './civil2-routing.module';

import { Civil2Page } from './civil2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Civil2PageRoutingModule
  ],
  declarations: [Civil2Page]
})
export class Civil2PageModule {}
