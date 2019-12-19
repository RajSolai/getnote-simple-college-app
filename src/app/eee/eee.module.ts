import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EeePageRoutingModule } from './eee-routing.module';

import { EeePage } from './eee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EeePageRoutingModule
  ],
  declarations: [EeePage]
})
export class EeePageModule {}
