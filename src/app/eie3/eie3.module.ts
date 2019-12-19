import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Eie3PageRoutingModule } from './eie3-routing.module';

import { Eie3Page } from './eie3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Eie3PageRoutingModule
  ],
  declarations: [Eie3Page]
})
export class Eie3PageModule {}
