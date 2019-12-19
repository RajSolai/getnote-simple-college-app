import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cse2PageRoutingModule } from './cse2-routing.module';

import { Cse2Page } from './cse2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cse2PageRoutingModule
  ],
  declarations: [Cse2Page]
})
export class Cse2PageModule {}
