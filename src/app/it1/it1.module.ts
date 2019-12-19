import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { It1PageRoutingModule } from './it1-routing.module';

import { It1Page } from './it1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    It1PageRoutingModule
  ],
  declarations: [It1Page]
})
export class It1PageModule {}
