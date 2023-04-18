import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Mensaje } from 'src/models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url='http://localhost:3001/api/Mensajes/';
  constructor(private http:HttpClient) { }

  guardarMensaje(mensaje:Mensaje):Observable<any>{
    return this.http.post(this.url, mensaje);
  }
 
}
