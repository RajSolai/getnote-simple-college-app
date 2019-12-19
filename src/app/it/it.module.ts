import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItPageRoutingModule } from './it-routing.module';

import { ItPage } from './it.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItPageRoutingModule
  ],
  declarations: [ItPage]
})
export class ItPageModule {}
