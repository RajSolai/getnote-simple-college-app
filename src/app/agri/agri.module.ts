import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgriPageRoutingModule } from './agri-routing.module';

import { AgriPage } from './agri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgriPageRoutingModule
  ],
  declarations: [AgriPage]
})
export class AgriPageModule {}
