import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from 'src/modelos/Login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3001/api/login/';
  constructor(private http:HttpClient) { }


  Login(mensaje: Login): Observable<any> {
    return this.http.post(this.url, mensaje);
  }
}
