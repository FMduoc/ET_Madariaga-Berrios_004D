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
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./pages/codigo-qr/codigo-qr.module').then( m => m.CodigoQrPageModule)
  },
  {
    path: 'registrar-clase',
    loadChildren: () => import('./pages/registrar-clase/registrar-clase.module').then( m => m.RegistrarClasePageModule)
  },
  {
    path: 'mis-clases',
    loadChildren: () => import('./pages/mis-clases/mis-clases.module').then( m => m.MisClasesPageModule)
  },
  {
    path: 'justificativos',
    loadChildren: () => import('./pages/justificativos/justificativos.module').then( m => m.JustificativosPageModule)
  },
  {
    path: 'mis-justif',
    loadChildren: () => import('./pages/mis-justif/mis-justif.module').then( m => m.MisJustifPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
