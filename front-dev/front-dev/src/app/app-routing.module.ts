import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComentariosComponent } from './get-comentarios/get-comentarios.component';
import { PushEventosComponent } from './push-eventos/push-eventos.component';
import { PushNoticiasComponent } from './push-noticias/push-noticias.component';
import { HomeComponent } from './home/home.component';
import { ListarEventosComponent } from './listar-eventos/listar-eventos.component';
import { ListarNoticiasComponent } from './listar-noticias/listar-noticias.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

{
  path:'comentarios',
  component:GetComentariosComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'eventos',
  component:PushEventosComponent
},
{
  path:'listar-eventos',
  component:ListarEventosComponent
},
{
  path:'editar-eventos/:id',
  component:PushEventosComponent
},
{
  path:'listar-noticias',
  component:ListarNoticiasComponent
},
{
  path:'editar-noticias/:id',
  component:PushNoticiasComponent
},
{
  path:'noticias',
  component:PushNoticiasComponent
},
{
  path:'home',
  component:HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
