import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NuevoUsuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup;

  nuevoUsuario: NuevoUsuario = {
    nombre: '',
    rut: '',
    email: '',
    password: '',
    isActive: true,
  };

  userdata: any;

  constructor(private authservice: AuthService, 
              private alertcontroller: AlertController,
              private router: Router,
              private fBuilder: FormBuilder) {this.registroForm = this.fBuilder.group({
                nombre: ['', [Validators.required, Validators.minLength(6)]],
                rut: ['', [Validators.required, Validators.minLength(8)]],
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
              });}

  ngOnInit() {
  }

  crearUsuario(){
    if (this.registroForm.valid){
      this.authservice.GetUserByEmail(this.registroForm.value.email).subscribe(resp=>{
        this.userdata = resp || [];
        if(this.userdata.length>0){
           this.registroForm.reset();
          this.errorDuplicidad();
        }
        else{
          this.nuevoUsuario.nombre = this.registroForm.value.nombre;
          this.nuevoUsuario.rut = this.registroForm.value.rut;
          this.nuevoUsuario.password = this.registroForm.value.password;
          this.nuevoUsuario.email = this.registroForm.value.email;
          this.nuevoUsuario.isActive=true;
          this.authservice.registro(this.nuevoUsuario).subscribe();
          this.registroForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/home');
        }
      })
    }
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usuario creado',
      message: 'Bienvenid@! ' + this.nuevoUsuario.nombre,
      buttons: ['OK']
    });
    alerta.present();
  }

  async errorDuplicidad(){
    const alerta = await this.alertcontroller.create({
      header: 'Error..',
      message: 'Usted '+ this.nuevoUsuario.nombre + ' ya esta registrado:D',
      buttons: ['OK']
    });
    alerta.present();
  }
}
