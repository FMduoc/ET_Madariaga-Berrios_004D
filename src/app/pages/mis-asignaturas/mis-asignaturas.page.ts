import { Component, OnInit } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';


@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.page.html',
  styleUrls: ['./mis-asignaturas.page.scss'],
})
export class MisAsignaturasPage implements OnInit {

  clases: any[] = [];
  docenteId: string ="";

  constructor(private clasesService: ClasesService) { }

  ngOnInit() {
      // Obtener la ID del docente desde sessionStorage (o el servicio de autenticación)
      this.docenteId = sessionStorage.getItem('docenteId') || ''; // Ajusta según cómo almacenes la ID del docente
  
      // Obtener las clases del docente
      if (this.docenteId) {
        this.clasesService.obtenerClasesPorDocente(this.docenteId).subscribe((data) => {
          this.clases = data;
        });
  }
  }
}
