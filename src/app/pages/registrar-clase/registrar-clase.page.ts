import { Component, OnInit } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';
import { Clases } from 'src/app/interfaces/clases';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registrar-clase',
  templateUrl: './registrar-clase.page.html',
  styleUrls: ['./registrar-clase.page.scss'],
})
export class RegistrarClasePage implements OnInit {

  clases: Clases[] = [];
  estudianteId: string | null;

  constructor(private clasesService: ClasesService,
              private alertController: AlertController) {this.estudianteId = sessionStorage.getItem('usuarioId');}

  ngOnInit() {
    this.cargarClases();
  }

  cargarClases() {
    this.clasesService.getClases().subscribe((data: any[]) => {
      this.clases = data;
    });
  }


  registrarEnClase(claseId: string) {
    if (this.estudianteId) {
      // Buscar la clase seleccionada
      const clase = this.clases.find((c) => c.id === claseId);

      if (clase && !clase.estudiantesInscritos.includes(this.estudianteId)) {
        // Agregar el ID del estudiante al array
        clase.estudiantesInscritos.push(this.estudianteId);

        // Actualizar la clase en el JSON
        this.clasesService.updateClase(claseId, clase).subscribe(() => {
          this.mostrarMensaje(`Registrado en la clase ${clase.nombre} exitosamente.`);
        });
      } else {
        this.mostrarMensaje(`Ya estás registrado en la clase ${clase?.nombre}.`);
      }
    } else {
      this.mostrarMensaje('Error: No se encontró tu ID de usuario.');
    }
  }

  async mostrarMensaje(mensaje: string) {
    const alerta = await this.alertController.create({
      header: 'Registro de Clase',
      message: mensaje,
      buttons: ['OK'],
    });
    await alerta.present();
  }
}
