import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarUsuarioComponent } from './agregar-Usuario/agregar-Usuario.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-Usuario.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

const routes: Routes = [
  { path: "acerca-de", component: AcercaDeComponent },
  { path: "Usuarios", component: ListarUsuariosComponent },
  { path: "Usuarios/agregar", component: AgregarUsuarioComponent },
  { path: "Usuarios/editar/:id", component: EditarUsuarioComponent },
  { path: "", redirectTo: "/Usuarios", pathMatch: "full" },// Cuando es la raíz
  { path: "**", redirectTo: "/Usuarios" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
