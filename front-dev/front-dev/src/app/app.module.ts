import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetComentariosComponent } from './get-comentarios/get-comentarios.component';
import { PushNoticiasComponent } from './push-noticias/push-noticias.component';
import { PushEventosComponent } from './push-eventos/push-eventos.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ListarEventosComponent } from './listar-eventos/listar-eventos.component';
import { ListarNoticiasComponent } from './listar-noticias/listar-noticias.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GetComentariosComponent,
    PushNoticiasComponent,
    PushEventosComponent,
    NavComponent,
    HomeComponent,
    ListarEventosComponent,
    ListarNoticiasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
