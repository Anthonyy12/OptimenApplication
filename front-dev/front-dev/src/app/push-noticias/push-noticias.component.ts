import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventos } from 'src/modelos/Eventos';
import { Noticias } from 'src/modelos/Noticias';
import { NoticiasService } from 'src/services/noticias.service';
@Component({
  selector: 'app-push-noticias',
  templateUrl: './push-noticias.component.html',
  styleUrls: ['./push-noticias.component.css'],
})
export class PushNoticiasComponent implements OnInit {
  NoticiasForm: FormGroup;
  titulo = 'Publicar Noticia';
  id: string | null;
  listarNoticias: Noticias[] = [];
  constructor(
    private Noti: FormBuilder,
    private router: Router,
    private NoticiaService: NoticiasService,
    private aRouter: ActivatedRoute
  ) {
    this.NoticiasForm = this.Noti.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      descripcion: ['', Validators.required],
      adicional: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editar();
  }

  GuardarNoticias() {
    const NOTICIA: Noticias = {
      titulo: this.NoticiasForm.get('titulo')?.value,
      autor: this.NoticiasForm.get('autor')?.value,
      informacion: this.NoticiasForm.get('descripcion')?.value,
      message: this.NoticiasForm.get('adicional')?.value,
    };
    if (this.id !== null) {
      this.NoticiaService.editarNoticia(this.id, NOTICIA).subscribe((data) => {
        alert('Noticia Actualizada');
        this.router.navigate(['/listar-noticias']);
      });
    } else {
      console.log(NOTICIA);
      this.NoticiaService.guardarMensaje(NOTICIA).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/listar-noticias']);
      });
    }
  }



  editar() {
    if (this.id !== null) {
      this.titulo = 'Editar Noticia';
      this.NoticiaService.obtenerNoticia(this.id).subscribe((data) => {
        this.NoticiasForm.patchValue({
          titulo: data.titulo,
          autor: data.autor,
          descripcion: data.descripcion,
          adicional: data.adicional,
        });
      });
    }
  }
}
