import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasesService } from 'src/app/services/clases.service';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-sesion-activa',
  templateUrl: './sesion-activa.page.html',
  styleUrls: ['./sesion-activa.page.scss'],
})
export class SesionActivaPage implements OnInit {

  idClase: string="";
  fecha: string="";
  estudiantesInscritos: string[] = [];
  asistencia: { [key: string]: boolean } = {};

  constructor(private route: ActivatedRoute,
              private clasesService: ClasesService,
              private asistenciaService: AsistenciaService) { }

  ngOnInit() {// Obtener la ID de la clase desde la ruta
              this.route.paramMap.subscribe(params => {
                this.idClase = params.get('idClase')!;
                this.obtenerClase();
              });
              Camera.requestPermissions();
  }

  async leerQr(){
    const image = await Camera.getPhoto({
      quality:90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
  }


  obtenerClase() {
    // Llamar al servicio para obtener la clase
    this.clasesService.getClasePorId(this.idClase).subscribe(clase => {
      // Guardar los estudiantes inscritos
      this.estudiantesInscritos = clase.estudiantesInscritos;
      // Inicializar la asistencia con valores false (no asistió por defecto)
      this.estudiantesInscritos.forEach(id => {
        this.asistencia[id] = false;
      });
    });
  }

  iniciarSesion() {
    // Guardar la sesión de la clase con la fecha y la asistencia
    const sessionData = {
      idClase: this.idClase,
      fecha: this.fecha,
      estudiantes: this.estudiantesInscritos.map(id => ({
        idEstudiante: id,
        asistio: this.asistencia[id] || false  // Si no ha asistido, poner false
      }))
    };

  
    this.asistenciaService.registrarAsistencia(sessionData).subscribe(response => {
      // Lógica después de registrar la asistencia (por ejemplo, mostrar un mensaje)
      console.log('Asistencia registrada con éxito:', response);
    }, error => {
      console.error('Error al registrar la asistencia:', error);
    });
  }

}
