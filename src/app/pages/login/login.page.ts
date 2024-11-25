import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata:any;

  usuario={
    id:0,
    nombre:"",
    rut:"",
    email:"",
    password:"",
    isActive:false
  }

  loginForm:FormGroup;

  constructor(private authservice:AuthService, private router:Router, private toast: ToastController,
              private alertcontroller: AlertController, private builder: FormBuilder) {this.loginForm = this.builder.group({
                'email': new FormControl("", [Validators.required, Validators.email]),
                'password' : new FormControl("", [Validators.required, Validators.minLength(8)]),
              })}

  ngOnInit() {
  }

  login(){
    if (!this.loginForm.valid){
      return;
    }
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authservice.GetUserByEmail(email).subscribe(resp =>{
      this.userdata = resp;
      console.log(this.userdata);
      if (this.userdata.length === 0) {
        this.loginForm.reset();
        this.UsuarioNoExiste();
        return;
      }

      this.usuario={
        id: this.userdata[0].id,
        nombre: this.userdata[0].nombre,
        rut: this.userdata[0].rut,
        password: this.userdata[0].password,
        email:this.userdata[0].email,
        isActive: this.userdata[0].isActive
      }
      if (this.usuario.password !== password) {
        this.loginForm.reset();
        this.ErrorUsuario(); 
        return;
      }
      if (!this.usuario.isActive) {
        this.loginForm.reset();
        this.UsuarioInactivo();
        return;
      }
      this.IniciarSesion(this.usuario);
      localStorage.setItem('currentUser', JSON.stringify(this.usuario));  // or sessionStorage
    })
  }

  private IniciarSesion(usuario:any){
    sessionStorage.setItem('email', usuario.email);
    sessionStorage.setItem('password', usuario.password);
    sessionStorage.setItem('ingresado', 'true');
    sessionStorage.setItem('docenteId', usuario.id);
    this.showToast('Sesión Iniciada '+ this.usuario.email);
    this.router.navigate(['/inicio']);

  }

  async showToast(msg: any){
    const toast= await this.toast.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }

  async UsuarioInactivo(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Usuario inactivo',
      message : 'Contactar a admin@admin.cl',
      buttons : ['OK']
    })
    alerta.present();
  }

  async ErrorUsuario(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Error..',
      message : 'Revise sus credenciales',
      buttons : ['OK']
    })
    alerta.present();
  }

  async UsuarioNoExiste(){
    const alerta = await this.alertcontroller.create({ 
      header : 'No existe...',
      message : 'Debe registrarse..',
      buttons : ['OK']
    })
    alerta.present();
  }
}
