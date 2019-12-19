import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsemainPageRoutingModule } from './csemain-routing.module';

import { CsemainPage } from './csemain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsemainPageRoutingModule
  ],
  declarations: [CsemainPage]
})
export class CsemainPageModule {}
