import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cse1PageRoutingModule } from './cse1-routing.module';

import { Cse1Page } from './cse1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cse1PageRoutingModule
  ],
  declarations: [Cse1Page]
})
export class Cse1PageModule {}
