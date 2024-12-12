import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage implements OnInit {

  userData: string = '';

  constructor() {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (user) {
      this.userData = `ID Estudiante: ${user.id}, Nombre: ${user.nombre}, Correo: ${user.email}, RUT: ${user.rut}`;
  }}

  ngOnInit() {
  }

}
