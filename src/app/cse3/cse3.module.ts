import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cse3PageRoutingModule } from './cse3-routing.module';

import { Cse3Page } from './cse3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cse3PageRoutingModule
  ],
  declarations: [Cse3Page]
})
export class Cse3PageModule {}
