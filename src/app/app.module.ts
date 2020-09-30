import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListAlumnosComponent } from './components/list-alumnos/list-alumnos.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListAlumnosComponent,
    CrearAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
