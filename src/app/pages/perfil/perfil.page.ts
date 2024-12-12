import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: Usuario | null = null;
  nombre: string = '';
  fotoPerfil: string | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.cargarUsuario();
    this.fotoPerfil = localStorage.getItem('fotoPerfil');
  }

  cargarUsuario() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  
    // Verifica si currentUser es un objeto válido y tiene la propiedad 'nombre'
    if (currentUser && typeof currentUser === 'object' && 'nombre' in currentUser) {
      this.usuario = currentUser;
      this.nombre = this.nombre = this.usuario?.nombre || ''; // Aquí no debería haber error
    } else {
      this.usuario = null; // Maneja el caso donde no hay usuario
      this.nombre = ''; // Inicializa el nombre vacío
    }
  }

  cargarFoto(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.fotoPerfil = e.target?.result as string;
        localStorage.setItem('fotoPerfil', this.fotoPerfil);
      };
      reader.readAsDataURL(file);
    }
  }

  guardarCambios() {
    if (this.usuario) {
      // Actualiza el nombre en el objeto usuario
      this.usuario.nombre = this.nombre;
      
      // Envía el usuario actualizado al backend
      this.authService.actualizarUsuario(this.usuario).subscribe(
        (response) => {
          localStorage.setItem('currentUser', JSON.stringify(response)); // Actualiza el usuario en el local storage
          alert('Cambios guardados con éxito.');
        },
        (error) => {
          console.error('Error al guardar cambios:', error);
          alert('Hubo un error al guardar los cambios.');
        }
      );
    }
  }
}