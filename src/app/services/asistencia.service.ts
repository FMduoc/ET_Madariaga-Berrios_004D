import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment2 } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  private apiUrl = `${environment2.apiUrl}/asistencia`;

  constructor(private http: HttpClient) { }

  registrarAsistencia(sessionData: any): Observable<any> {
    // Enviar la solicitud POST para registrar la asistencia
    return this.http.post<any>(this.apiUrl, sessionData);
  }
}
