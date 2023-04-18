import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/modelos/Noticias';
import { NoticiasService } from 'src/services/noticias.service';

@Component({
  selector: 'app-listar-noticias',
  templateUrl: './listar-noticias.component.html',
  styleUrls: ['./listar-noticias.component.css'],
})
export class ListarNoticiasComponent implements OnInit {
  listarNoticias: Noticias[] = [];
  constructor(public noticiasService: NoticiasService) {}
  ngOnInit(): void {
    this.obtenerNoticia();
  }
  obtenerNoticia() {
    this.noticiasService.getNoticias().subscribe((data) => {
      console.log(data);
      this.listarNoticias = data;
    });
  }
  eliminar(id: any) {
    if (confirm('seguro de eliminar?')) {
      this.noticiasService.eliminar(id).subscribe((data) => {
        console.log(data);
        alert('Noticia Eliminada');
        this.obtenerNoticia();
      });
    }
  }
}
