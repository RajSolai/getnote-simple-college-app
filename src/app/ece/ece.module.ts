import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcePageRoutingModule } from './ece-routing.module';

import { EcePage } from './ece.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcePageRoutingModule
  ],
  declarations: [EcePage]
})
export class EcePageModule {}
