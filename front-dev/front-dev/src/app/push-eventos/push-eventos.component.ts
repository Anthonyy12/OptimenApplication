import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventos } from 'src/modelos/Eventos';
import { EventosService } from 'src/services/eventos.service';

@Component({
  selector: 'app-push-eventos',
  templateUrl: './push-eventos.component.html',
  styleUrls: ['./push-eventos.component.css'],
})
export class PushEventosComponent implements OnInit {
  EventosForm: FormGroup;
  titulo = 'Publicar Evento';
  id: string | null;
  listarNoticias: Eventos[] = [];
  constructor(
    private Event: FormBuilder,
    private router: Router,
    private EventoService: EventosService,
    private aRouter: ActivatedRoute
  ) {
    this.EventosForm = this.Event.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      lugar: ['', Validators.required],
      fecha: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.editar();
  }

  GuardarEventos() {
    const EVENTO: Eventos = {
      titulo: this.EventosForm.get('titulo')?.value,
      descripcion: this.EventosForm.get('descripcion')?.value,
      lugar: this.EventosForm.get('lugar')?.value,
      fecha: this.EventosForm.get('fecha')?.value,
    };
    if (this.id !== null) {
      this.EventoService.editarEvento(this.id, EVENTO).subscribe((data) => {
        alert('Evento Actualizado');
        this.router.navigate(['/listar-eventos']);
      });
    } else {
    console.log(EVENTO);
    this.EventoService.guardarEvento(EVENTO).subscribe((data) => {
      alert('Evento Agregado');
      this.router.navigate(['/listar-eventos']);
    });
    }
  }

  editar() {
    if (this.id !== null) {
      this.titulo = 'Editar Noticia';
      this.EventoService.obtenerEvento(this.id).subscribe((data) => {
        this.EventosForm.patchValue({
          titulo: data.titulo,
          lugar: data.lugar,
          descripcion: data.descripcion,
          fecha: data.fecha,
        });
      });
    }
  }
}
