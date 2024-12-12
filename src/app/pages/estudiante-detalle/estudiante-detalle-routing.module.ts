import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudianteDetallePage } from './estudiante-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: EstudianteDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudianteDetallePageRoutingModule {}
