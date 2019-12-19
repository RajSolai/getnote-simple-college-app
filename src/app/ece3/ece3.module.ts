import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ece3PageRoutingModule } from './ece3-routing.module';

import { Ece3Page } from './ece3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ece3PageRoutingModule
  ],
  declarations: [Ece3Page]
})
export class Ece3PageModule {}
