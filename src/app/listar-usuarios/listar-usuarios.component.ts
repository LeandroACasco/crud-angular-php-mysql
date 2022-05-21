
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../usuarios.service"
import { Usuario } from "../usuario"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-listar-Usuarios',
  templateUrl: './listar-Usuarios.component.html',
  styleUrls: ['./listar-Usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  public Usuarios: Usuario[] = [
  ];

  constructor(private UsuariosService: UsuariosService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarUsuario(Usuario: Usuario) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${Usuario.user}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.UsuariosService
          .eliminarUsuario(Usuario)
          .subscribe(() => {
            this.obtenerUsuarios();
            this.snackBar.open('Usuario eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    return this.UsuariosService
      .getUsuarios()
      .subscribe((Usuarios: Usuario[]) => this.Usuarios = Usuarios);
  }

}
