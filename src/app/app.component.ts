import { Component } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { AuthService } from './services/auth.service';
import { register } from 'swiper/element/bundle';
register();

interface Opciones{
  icon: string;
  name:string;
  redirecTo:string;
} 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  showMenu = false;

  opciones: Opciones[]=[{
    icon:'apps-sharp',
    name:'Inicio',
    redirecTo: '/inicio'
  },
  {
    icon:'person-sharp',
    name:'Perfil',
    redirecTo: '/perfil'
  },
  {
    icon:'school-sharp',
    name:'Registro de clases',
    redirecTo: '/registrar-clase'
  },
  {
    icon:'book',
    name:'Mis clases',
    redirecTo: '/mis-clases'
  },
  {
    icon:'document-text-sharp',
    name:'Justificativos',
    redirecTo: '/mis-justif'
  },
  {
    icon:'log-out-sharp',
    name:'Cerrar sesión',
    redirecTo: '/home'
  }
]

  constructor(private authService: AuthService, private router: Router) {
              this.router.events.subscribe((event) => {
              if (event instanceof NavigationEnd) {
              this.checkIfMenuShouldBeVisible();
              }
              });
}

  checkIfMenuShouldBeVisible() {
    const currentUrl = this.router.url;
    const excludedPaths = ['/login', '/registro', '/home'];

    this.showMenu = this.authService.isAuthenticated() && !excludedPaths.includes(currentUrl);
    console.log('showMenu:', this.showMenu);
}

  navigateTo(option: Opciones) {
  if (option.name === 'Cerrar sesión') {
    this.authService.logout();
    this.router.navigate(['/home']);
  } else if (option.name === 'Perfil') {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.router.navigate([option.redirecTo]);
    } else {
      console.log("No logged-in user data found");
    }
  } else if (option.name === 'Generar QR') {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.router.navigate([option.redirecTo]);
    } else {
      console.log("No logged-in user data found");
    }
  }
  else {
    this.router.navigate([option.redirecTo]);
  }
}
}
