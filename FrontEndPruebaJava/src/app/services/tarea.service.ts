import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../modelos/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private baseURL = "http://localhost:8081/tareas"

  constructor(private httpClient : HttpClient) { }

  obtenerListaTareas(): Observable<Tarea[]>{
    return this.httpClient.get<Tarea[]>(`${this.baseURL}`);
  }

  registrarTarea(tarea: Tarea): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, tarea);
  }
  
}
