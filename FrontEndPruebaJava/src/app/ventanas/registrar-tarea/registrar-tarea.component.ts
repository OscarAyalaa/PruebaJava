import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/modelos/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-registrar-tarea',
  templateUrl: './registrar-tarea.component.html',
  styleUrls: ['./registrar-tarea.component.css']
})
export class RegistrarTareaComponent implements OnInit {

  registroError: string = "";

  registerForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    fecha: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private tareaService : TareaService) { }

  ngOnInit(): void {
  }

  get nombre(){
    return this.registerForm.controls.nombre;
  }

  get descripcion(){
    return this.registerForm.controls.descripcion;
  }

  get fecha(){
    return this.registerForm.controls.fecha;
  }

  registrarTarea(){
    if(this.registerForm.valid){
      this.tareaService.registrarTarea(this.registerForm.value as unknown as Tarea).subscribe({
        next: (datos) =>{
          console.log(datos);
        },
        error: (errorData) =>{
          console.error(errorData);
          this.registroError = errorData;
        },
        complete: () => {
          console.info("registrado")
          this.router.navigateByUrl('/lista-tareas');
          this.registerForm.reset();
        }
      })

    }else{
      this.registerForm.markAllAsTouched();
      alert("Error al ingresar los datos")
    }
  }
}

