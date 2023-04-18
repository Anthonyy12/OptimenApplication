import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { comentarios } from './comentarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  url='http://localhost:3001/api/Mensajes/';
  constructor(private http:HttpClient) { }

  getComentarios():Observable<any>{
    return this.http.get(this.url);
  }

 
}
