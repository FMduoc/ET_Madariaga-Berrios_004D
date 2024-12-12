import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JustificativosService } from 'src/app/services/justificativos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NuevoJustificativo } from 'src/app/interfaces/justificativos';

@Component({
  selector: 'app-justificativos',
  templateUrl: './justificativos.page.html',
  styleUrls: ['./justificativos.page.scss'],
})
export class JustificativosPage implements OnInit {

  registroForm: FormGroup;
  nuevoJustificativo: NuevoJustificativo = {
    idEstudiante: '',
    idClase: '',
    comentario: '',
    comentDocente: ''
  };

  constructor(
    private justificativosService: JustificativosService,
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private fBuilder: FormBuilder
  ) {
    this.registroForm = this.fBuilder.group({
      comentario: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    // Obtener parámetros de la URL
    this.nuevoJustificativo.idEstudiante = this.route.snapshot.paramMap.get('idEstudiante') || '';
    this.nuevoJustificativo.idClase = this.route.snapshot.paramMap.get('idClase') || '';
  }

  registrarJustificativo() {
    if (this.registroForm.valid) {
      this.nuevoJustificativo.comentario = this.registroForm.value.comentario;
      this.nuevoJustificativo.comentDocente = ''; // Inicialmente vacío

      this.justificativosService.createJustificativo(this.nuevoJustificativo).subscribe(
        async (response) => {
          const alerta = await this.alertController.create({
            header: '¡Justificativo Enviado!',
            message: 'Tu justificativo ha sido registrado con éxito.',
            buttons: ['OK']
          });
          await alerta.present();
          this.router.navigateByUrl('/mis-clases'); // Redirigir tras el éxito
        },
        async (error) => {
          const alerta = await this.alertController.create({
            header: 'Error',
            message: 'No se pudo enviar el justificativo. Inténtalo nuevamente.',
            buttons: ['OK']
          });
          await alerta.present();
        }
      );
    }
  }
}