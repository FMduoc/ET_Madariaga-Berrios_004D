import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clases } from '../interfaces/clases';
import { environment2 } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  private apiUrl = `${environment2.apiUrl}/clases`; // IMPORTANTE este formato de URL para el GET de clases!

  constructor(private httpclient: HttpClient) { }

  getClases(): Observable<Clases[]> {
    return this.httpclient.get<Clases[]>(this.apiUrl);
  }
  
  // Actualizar una clase existente
  updateClase(id: string, clase: Clases): Observable<Clases> {
    return this.httpclient.put<Clases>(`${this.apiUrl}/${id}`, clase);
  }
}
