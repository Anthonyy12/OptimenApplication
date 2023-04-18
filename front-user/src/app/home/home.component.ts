import { Component,OnInit } from '@angular/core';
import { Eventos } from 'src/models/eventos';
import { EventosService } from 'src/servis/eventos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  listarEventos:Eventos[]=[];

  constructor( 
    public eventoService:EventosService){
;
}
  ngOnInit(): void {
    this.obtenerEvento();
  }
  obtenerEvento() {
    this.eventoService.getEventos().subscribe((data) => {
      console.log(data);
      this.listarEventos = data;
    });
  }
}
