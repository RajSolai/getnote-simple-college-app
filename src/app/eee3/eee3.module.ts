import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Eee3PageRoutingModule } from './eee3-routing.module';

import { Eee3Page } from './eee3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Eee3PageRoutingModule
  ],
  declarations: [Eee3Page]
})
export class Eee3PageModule {}
