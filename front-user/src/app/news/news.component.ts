import { Component,OnInit } from '@angular/core';
import { Noticias } from 'src/models/Noticias';
import { NoticiasService } from 'src/servis/noticias.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  listarNoticias:Noticias[]=[];

  constructor(public noticiasService:NoticiasService){}
  ngOnInit(): void {
    this.obtenerNoticia();
  }
  obtenerNoticia() {
    this.noticiasService.getNoticias().subscribe((data) => {
      console.log(data);
      this.listarNoticias = data;
    });
  }
}
