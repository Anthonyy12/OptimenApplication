import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Eventos } from 'src/modelos/Eventos';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  url = 'http://localhost:3001/api/Eventos/';
  constructor(private http: HttpClient) {}
  guardarEvento(mensaje: Eventos): Observable<any> {
    return this.http.post(this.url, mensaje);
  }

  getEventos(): Observable<any> {
    return this.http.get(this.url);
  }
  eliminar(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  obtenerEvento(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  editarEvento(id: string, evento: Eventos): Observable<any> {
    return this.http.put(this.url + id, evento);
  }
}
