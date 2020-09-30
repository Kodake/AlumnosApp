import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  myAppUrl = 'https://localhost:44390/';
  myApiUrl = 'api/Alumno/';
  list: Alumno[];

  constructor(private http: HttpClient) { }

  getListAlumnos() {
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
      .then(data => {
        this.list = data as Alumno[];
      });
  }

  agregarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.myAppUrl + this.myApiUrl, alumno)
  }

  actualizarAlumno(id: number, alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(this.myAppUrl + this.myApiUrl + id, alumno);
  }
}