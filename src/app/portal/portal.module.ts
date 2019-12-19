import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortalPageRoutingModule } from './portal-routing.module';

import { PortalPage } from './portal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortalPageRoutingModule
  ],
  declarations: [PortalPage]
})
export class PortalPageModule {}
