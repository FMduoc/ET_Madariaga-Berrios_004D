import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionActivaPage } from './sesion-activa.page';

const routes: Routes = [
  {
    path: '',
    component: SesionActivaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionActivaPageRoutingModule {}
