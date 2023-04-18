import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Noticias } from 'src/modelos/Noticias';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  url = 'http://localhost:3001/api/Noticias/';
  constructor(private http: HttpClient) {}

  guardarMensaje(mensaje: Noticias): Observable<any> {
    return this.http.post(this.url, mensaje);
  }

  getNoticias(): Observable<any> {
    return this.http.get(this.url);
  }
  eliminar(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  obtenerNoticia(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  editarNoticia(id: string, noticia: Noticias): Observable<any> {
    return this.http.put(this.url + id, noticia);
  }
}
