import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { It4PageRoutingModule } from './it4-routing.module';

import { It4Page } from './it4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    It4PageRoutingModule
  ],
  declarations: [It4Page]
})
export class It4PageModule {}
