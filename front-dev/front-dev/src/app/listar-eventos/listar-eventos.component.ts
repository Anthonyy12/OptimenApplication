import { Component, OnInit } from '@angular/core';
import { Eventos } from 'src/modelos/Eventos';
import { EventosService } from 'src/services/eventos.service';

@Component({
  selector: 'app-listar-eventos',
  templateUrl: './listar-eventos.component.html',
  styleUrls: ['./listar-eventos.component.css'],
})
export class ListarEventosComponent implements OnInit {
  listarEventos: Eventos[] = [];

  constructor(public eventoService: EventosService) {}
  ngOnInit(): void {
    this.obtenerEvento();
  }

  eliminar(id: any) {
    if (confirm('seguro de eliminar?')) {
      this.eventoService.eliminar(id).subscribe((data) => {
        console.log(data);
        alert('Evento Eliminado');
        this.obtenerEvento();
      });
    }
  }

  obtenerEvento() {
    this.eventoService.getEventos().subscribe((data) => {
      console.log(data);
      this.listarEventos = data;
    });
  }
}
