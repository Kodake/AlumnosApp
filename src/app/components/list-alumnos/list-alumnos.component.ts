import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/services/alumno.service';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {

  constructor(public alumnoService: AlumnoService) { }
  
  ngOnInit(): void {
    this.alumnoService.getListAlumnos();
  }

  actualizarAlumno(id: number, estado: string, alumno: Alumno) {

    alumno.estado = estado;
    
    this.alumnoService.actualizarAlumno(id, alumno).subscribe(data => {
      this.alumnoService.getListAlumnos();
    }); 
  }
}
