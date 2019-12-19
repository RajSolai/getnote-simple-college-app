import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cse4PageRoutingModule } from './cse4-routing.module';

import { Cse4Page } from './cse4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cse4PageRoutingModule
  ],
  declarations: [Cse4Page]
})
export class Cse4PageModule {}
