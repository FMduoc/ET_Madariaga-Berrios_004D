import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoJustificativo } from '../interfaces/justificativos';
import { Justificativo } from '../interfaces/justificativos';
import { environment2 } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JustificativosService {

  private apiUrl = `${environment2.apiUrl}/justificativos`;

  constructor(private httpclient: HttpClient) {}

  // Crear un nuevo justificativo
  createJustificativo(justificativo: NuevoJustificativo): Observable<any> {
    return this.httpclient.post<NuevoJustificativo>(this.apiUrl, justificativo);
  }

  // Get de justificativos por estudiante
  getJustificativosPorEstudiante(estudianteId: string): Observable<Justificativo[]> {
    return this.httpclient.get<Justificativo[]>(`${this.apiUrl}?idEstudiante=${estudianteId}`);
  }
}