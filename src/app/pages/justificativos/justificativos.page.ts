import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Justificativos } from 'src/app/interfaces/justificativos';
import { JustificativosService } from 'src/app/services/justificativos.service';

@Component({
  selector: 'app-justificativos',
  templateUrl: './justificativos.page.html',
  styleUrls: ['./justificativos.page.scss'],
})
export class JustificativosPage implements OnInit {
  justificativos: Justificativos[] = [];
  idClase: string = '';

  constructor(
    private route: ActivatedRoute,
    private justificativosService: JustificativosService
  ) {}

  ngOnInit() {
    this.idClase = this.route.snapshot.paramMap.get('idClase') || '';
    this.cargarJustificativos();
  }

  cargarJustificativos() {
    if (this.idClase) {
      this.justificativosService.getJustificativosByClase(this.idClase).subscribe((data) => {
        this.justificativos = data;
      });
    }
  }

  guardarComentario(justificativo: any) {
    this.justificativosService.updateComentarioDocente(justificativo).subscribe(
      () => {
        console.log('Comentario actualizado correctamente.');
        alert('Comentario actualizado.');
      },
      (error) => {
        console.error('Error al actualizar comentario:', error);
        alert('No se pudo actualizar el comentario.');
      }
    );
  }
}