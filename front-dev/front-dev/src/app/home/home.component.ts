import { Component ,OnInit} from '@angular/core';
import { Eventos } from 'src/modelos/Eventos';
import { Noticias } from "src/modelos/Noticias";
import { EventosService } from 'src/services/eventos.service';
import { NoticiasService } from 'src/services/noticias.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  listarNoticias:Noticias[]=[];
  listarEventos:Eventos[]=[];

  constructor( public noticiasService:NoticiasService,
              public eventoService:EventosService){
   ;
  }
  ngOnInit(): void {
    this.obtenerNoticia();
    this.obtenerEvento();
  }


  obtenerNoticia() {
    this.noticiasService.getNoticias().subscribe((data) => {
      console.log(data);
      this.listarNoticias = data;
    });
  }

  obtenerEvento() {
    this.eventoService.getEventos().subscribe((data) => {
      console.log(data);
      this.listarEventos = data;
    });
  }
}
