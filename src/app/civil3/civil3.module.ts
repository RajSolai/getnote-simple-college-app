import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Civil3PageRoutingModule } from './civil3-routing.module';

import { Civil3Page } from './civil3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Civil3PageRoutingModule
  ],
  declarations: [Civil3Page]
})
export class Civil3PageModule {}
