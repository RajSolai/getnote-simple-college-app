import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Civil4PageRoutingModule } from './civil4-routing.module';

import { Civil4Page } from './civil4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Civil4PageRoutingModule
  ],
  declarations: [Civil4Page]
})
export class Civil4PageModule {}
