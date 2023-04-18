export class Eventos {
  _id?: number;
  titulo: string;
  fecha: string;
  lugar: string;
  descripcion: string;

  constructor(
    titulo: string,
    fecha: string,
    lugar: string,
    descripcion: string
  ) {
    this.titulo = titulo;
    this.fecha = fecha;
    this.lugar = lugar;
    this.descripcion = descripcion;
  }
}
