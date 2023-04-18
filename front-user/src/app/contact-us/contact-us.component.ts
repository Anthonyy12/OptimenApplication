import { Component ,OnInit} from '@angular/core';
import {ContactoService  } from "../servi/contacto.service";
import { NgForm ,FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Mensaje } from 'src/models/mensaje';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  mensajesForm:FormGroup;
constructor (private mens:FormBuilder,
             private  router:Router,
             private mensajeService:ContactoService){
  this.mensajesForm=this.mens.group({
    name:['',Validators.required],
    lastname:['',Validators.required],
    email:['',Validators.required],
    message:['',Validators.required],
  })
}

ngOnInit():void{
  

}

guardarMensajes(){


const MENSAJE:Mensaje={
  name:this.mensajesForm.get('name')?.value,
  lastname:this.mensajesForm.get('lastname')?.value,
  email:this.mensajesForm.get('email')?.value,
   message:this.mensajesForm.get('message')?.value,
}
console.log(MENSAJE);
this.mensajeService.guardarMensaje(MENSAJE).subscribe(data=>{
  console.log(data);
  this.router.navigate(['/home']);
  
})

}

}
