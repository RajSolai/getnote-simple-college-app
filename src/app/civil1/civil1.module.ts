import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Civil1PageRoutingModule } from './civil1-routing.module';

import { Civil1Page } from './civil1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Civil1PageRoutingModule
  ],
  declarations: [Civil1Page]
})
export class Civil1PageModule {}
