import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Justificativos } from '../interfaces/justificativos';
import { environment2 } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JustificativosService {

  private apiUrl = `${environment2.apiUrl}/justificativos`;

  constructor(private httpclient: HttpClient) {}

  getJustificativosByClase(idClase: string): Observable<Justificativos[]> {
    return this.httpclient.get<Justificativos[]>(`${this.apiUrl}?idClase=${idClase}`);
  }

  updateComentarioDocente(justificativo: any): Observable<any> {
    return this.httpclient.put<any>(
      `${this.apiUrl}/justificativos/${justificativo.id}`,
      justificativo
    );
  }
}