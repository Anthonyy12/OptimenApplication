export class Mensajes{
    _id?:number;
    name:string;
lastname:string;
email:string;
message:string;

constructor (name:string,lastname:string,email:string,message:string){
this.name=name;
this.lastname=lastname;
this.email=email;
this.message=message;
}
}