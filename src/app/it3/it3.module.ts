import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { It3PageRoutingModule } from './it3-routing.module';

import { It3Page } from './it3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    It3PageRoutingModule
  ],
  declarations: [It3Page]
})
export class It3PageModule {}
