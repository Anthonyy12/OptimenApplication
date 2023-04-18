import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  url='http://localhost:3001/api/Eventos/';

  constructor(private http:HttpClient) { }
  
  getEventos():Observable<any>{
    return this.http.get(this.url);
  }
}
