import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareasComponent } from './ventanas/lista-tareas/lista-tareas.component';
import { RegistrarTareaComponent } from './ventanas/registrar-tarea/registrar-tarea.component';
import { InicioComponent } from './ventanas/inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: '',redirectTo:'/inicio', pathMatch:'full'},
  {path: 'lista-tareas', component: ListaTareasComponent},
  {path: 'registrar-tarea', component: RegistrarTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
