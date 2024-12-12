import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevaClases, Clases } from '../interfaces/clases';
import { environment2 } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  private apiUrl = environment2.apiUrl;

  constructor(private httpclient: HttpClient) { }

  getClases(): Observable<Clases[]> {
    return this.httpclient.get<Clases[]>(this.apiUrl);
  }
 
  // Crear una nueva clase OJO DEBO ACTUALIZAR ENVIRONMENTS PARA QUE APUNTE A CLOUD!!!!!!!!
  createClase(NuevaClase: NuevaClases): Observable<Clases> {
    return this.httpclient.post<Clases>(`${this.apiUrl}/clases `, NuevaClase);
  }

  // Actualizar una clase existente
  updateClase(id: string, clase: Clases): Observable<Clases> {
    return this.httpclient.put<Clases>(`${this.apiUrl}/${id}`, clase);
  }

  // Eliminar una clase
  deleteClase(id: string): Observable<void> {
    return this.httpclient.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Método para obtener las clases del docente actual
  obtenerClasesPorDocente(docenteId: string): Observable<any> {
    return this.httpclient.get<Clases[]>(`${this.apiUrl}/clases?docenteId=${docenteId}`);
  }

  // Método para obtener una clase por su ID
  getClasePorId(idClase: string): Observable<Clases> {
    return this.httpclient.get<Clases>(`${this.apiUrl}/clases/${idClase}`);
  }

}
