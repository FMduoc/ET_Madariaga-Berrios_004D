import { Component, OnInit } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';
import { Clases } from 'src/app/interfaces/clases';

@Component({
  selector: 'app-mis-clases',
  templateUrl: './mis-clases.page.html',
  styleUrls: ['./mis-clases.page.scss'],
})
export class MisClasesPage implements OnInit {

  clases: Clases[] = []; // Todas las clases
  misClases: Clases[] = []; // Clases del estudiante
  estudianteId: string | null;

  constructor(private clasesService: ClasesService) { this.estudianteId = sessionStorage.getItem('usuarioId');}

  ngOnInit() {this.cargarMisClases();}


  cargarMisClases() {
    if (this.estudianteId) {
      this.clasesService.getClases().subscribe((data: Clases[]) => {
        this.clases = data;

        // Filtrar las clases en las que el estudiante está registrado
        this.misClases = this.clases.filter((clase) =>
          clase.estudiantesInscritos.includes(this.estudianteId!)
        );
      });
    }
  }

  ass2(){
    
  }
  ass(){

  }
}
