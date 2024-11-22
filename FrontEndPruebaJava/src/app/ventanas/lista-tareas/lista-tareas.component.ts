import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/modelos/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas : Tarea[];

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(){
    this.tareaService.obtenerListaTareas().subscribe(
      datos => {
        this.tareas = datos;
      });
  }

}
