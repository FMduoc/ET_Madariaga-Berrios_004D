import { Component, OnInit } from '@angular/core';
import { JustificativosService } from 'src/app/services/justificativos.service';
import { Justificativo } from 'src/app/interfaces/justificativos';

@Component({
  selector: 'app-mis-justif',
  templateUrl: './mis-justif.page.html',
  styleUrls: ['./mis-justif.page.scss'],
})
export class MisJustifPage implements OnInit {

  justificativos: Justificativo[] = [];
  estudianteId: string | null;

  constructor(private justificativosService: JustificativosService) {
    this.estudianteId = sessionStorage.getItem('usuarioId');
  }

  ngOnInit() {
    this.cargarJustificativos();
  }

  cargarJustificativos() {
    if (this.estudianteId) {
      this.justificativosService.getJustificativosPorEstudiante(this.estudianteId).subscribe((data: Justificativo[]) => {
        this.justificativos = data;
      });
    }
  }
}