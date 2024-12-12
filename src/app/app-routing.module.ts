import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro-clase',
    loadChildren: () => import('./pages/registro-clase/registro-clase.module').then( m => m.RegistroClasePageModule)
  },
  {
    path: 'mis-asignaturas',
    loadChildren: () => import('./pages/mis-asignaturas/mis-asignaturas.module').then( m => m.MisAsignaturasPageModule)
  },
  {
    path: 'sesion-activa/:idClase',
    loadChildren: () => import('./pages/sesion-activa/sesion-activa.module').then( m => m.SesionActivaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'justificativos/:idClase',
    loadChildren: () => import('./pages/justificativos/justificativos.module').then( m => m.JustificativosPageModule)
  },
  {
    path: 'estudiante-detalle/:idEstudiante',
    loadChildren: () => import('./pages/estudiante-detalle/estudiante-detalle.module').then( m => m.EstudianteDetallePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
