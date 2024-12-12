import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario, Usuario } from '../interfaces/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(private httpclient: HttpClient) { }

  registro(nuevoUsuario: NuevoUsuario): Observable<Usuario> {
    return this.httpclient.post<Usuario>(`${this.apiUrl}/usuarios `, nuevoUsuario);
  }

  GetUserByEmail(email: string): Observable<Usuario[]> {
    return this.httpclient.get<Usuario[]>(`${this.apiUrl}/usuarios/?email=${email}`);
  }

  isAuthenticated(): boolean {
    const user = localStorage.getItem('currentUser');
    return !!user;
    /*return user !== null;*/
  }

  logout() {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('ingresado');
    console.log("Sesión cerrada");
  }

  actualizarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpclient.put<Usuario>(`${this.apiUrl}/usuarios/${usuario.id}`, usuario);
  }
}
