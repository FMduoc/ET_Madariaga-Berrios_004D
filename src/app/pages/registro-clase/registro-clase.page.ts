import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ClasesService } from 'src/app/services/clases.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NuevaClases } from 'src/app/interfaces/clases';

@Component({
  selector: 'app-registro-clase',
  templateUrl: './registro-clase.page.html',
  styleUrls: ['./registro-clase.page.scss'],
})
export class RegistroClasePage implements OnInit {

  registroForm: FormGroup;

  nuevaClase: NuevaClases = {
    nombre: '',
    seccion: '',
    docenteId: '',
    horarios: '',
    estudiantesInscritos: [],
  };

  clasedata: any;

  constructor(private clasesService: ClasesService,
              private alertcontroller: AlertController,
              private router: Router,
              private fBuilder: FormBuilder) {this.registroForm = this.fBuilder.group({
                nombre: ['', [Validators.required, Validators.minLength(6)]],
                seccion: ['', [Validators.required, Validators.minLength(4)]],
                horarios: ['', [Validators.required]],
                });}

  ngOnInit() {
    this.nuevaClase.docenteId = sessionStorage.getItem('docenteId') || '';
  }

   // Método para registrar una nueva clase
   registrarClase() {
    if (this.registroForm.valid){
      this.nuevaClase.nombre = this.registroForm.value.nombre;
      this.nuevaClase.seccion = this.registroForm.value.seccion;
      this.nuevaClase.docenteId = sessionStorage.getItem('docenteId') || '';
      this.nuevaClase.horarios = this.registroForm.value.horarios;
      this.clasesService.createClase(this.nuevaClase).subscribe();
      this.registroForm.reset();
      this.mostrarMensaje();
      this.router.navigateByUrl('/inicio');
    }
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Creación exitosa!',
      message: 'Clase ' + this.nuevaClase.nombre,
      buttons: ['OK']
    });
    alerta.present();
  }
}
