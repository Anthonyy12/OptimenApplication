export class Noticias{
    _id?:number;
    titulo:string;
autor:string;
informacion:string;
message:string;

constructor (titulo:string,autor:string,informacion:string,message:string){
this.titulo=titulo;
this.autor=autor;
this.informacion=informacion;
this.message=message;
}
}