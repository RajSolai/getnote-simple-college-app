import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { It2PageRoutingModule } from './it2-routing.module';

import { It2Page } from './it2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    It2PageRoutingModule
  ],
  declarations: [It2Page]
})
export class It2PageModule {}
