import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-estudiante-detalle',
  templateUrl: './estudiante-detalle.page.html',
  styleUrls: ['./estudiante-detalle.page.scss'],
})
export class EstudianteDetallePage implements OnInit {
  estudiante: any = null;

  constructor(
    private route: ActivatedRoute,
    private usuarios: AuthService
  ) {}

  ngOnInit() {
    const idEstudiante = this.route.snapshot.paramMap.get('idEstudiante');
    if (idEstudiante) {
      this.cargarEstudiante(idEstudiante);
    }
  }

  cargarEstudiante(id: string) {
    this.usuarios.getEstudiantePorId(id).subscribe(
      (data) => {
        this.estudiante = data;
      },
      (error) => {
        console.error('Error al cargar el estudiante:', error);
      }
    );
  }
}