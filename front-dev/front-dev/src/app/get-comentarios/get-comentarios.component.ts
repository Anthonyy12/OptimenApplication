import { Component, OnInit } from '@angular/core';
import { ComentariosService } from '../comentarios.service';
import { comentarios } from '../comentarios';
import { Mensajes } from 'src/modelos/Mensajes';
@Component({
  selector: 'app-get-comentarios',
  templateUrl: './get-comentarios.component.html',
  styleUrls: ['./get-comentarios.component.css'],
})
export class GetComentariosComponent implements OnInit {
  listarcomentarios: Mensajes[] = [];
  constructor(public _allcomentarios: ComentariosService) {}

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  obtenerComentarios() {
    this._allcomentarios.getComentarios().subscribe((data) => {
      console.log(data);
      this.listarcomentarios = data;
    });
  }
}
