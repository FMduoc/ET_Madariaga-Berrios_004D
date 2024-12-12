import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudianteDetallePageRoutingModule } from './estudiante-detalle-routing.module';

import { EstudianteDetallePage } from './estudiante-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudianteDetallePageRoutingModule
  ],
  declarations: [EstudianteDetallePage]
})
export class EstudianteDetallePageModule {}
