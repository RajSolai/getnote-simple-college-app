import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EiePageRoutingModule } from './eie-routing.module';

import { EiePage } from './eie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EiePageRoutingModule
  ],
  declarations: [EiePage]
})
export class EiePageModule {}
