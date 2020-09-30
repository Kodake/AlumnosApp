import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/services/alumno.service';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {

  listAlumnos: Alumno[] = [];
  nombre = '';
  estado = 'No Aprobado';

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {

  }

  agregarAlumno() {
    const alumno: Alumno = {
      nombre: this.nombre,
      estado: this.estado
    };

    this.alumnoService.agregarAlumno(alumno).subscribe(data => {
      this.alumnoService.getListAlumnos();
      this.nombre = '';
      this.estado = 'No Aprobado';
    });
  }
}