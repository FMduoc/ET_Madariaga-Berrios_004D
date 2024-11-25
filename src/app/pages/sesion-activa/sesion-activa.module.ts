import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionActivaPageRoutingModule } from './sesion-activa-routing.module';

import { SesionActivaPage } from './sesion-activa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SesionActivaPageRoutingModule
  ],
  declarations: [SesionActivaPage]
})
export class SesionActivaPageModule {}
