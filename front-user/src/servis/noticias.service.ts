import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  url='http://localhost:3001/api/Noticias/';
  constructor(private http:HttpClient) { }
  getNoticias():Observable<any>{
    return this.http.get(this.url);
  }
}
