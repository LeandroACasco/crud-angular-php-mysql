
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from "../usuarios.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-Usuario',
  templateUrl: './agregar-Usuario.component.html',
  styleUrls: ['./agregar-Usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  constructor(private UsuariosService: UsuariosService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  UsuarioModel = new Usuario("", "",undefined, "","", undefined,undefined, "","", "",undefined, undefined,undefined,undefined,"", undefined)

  onSubmit() {
    this.UsuariosService.agregarUsuario(this.UsuarioModel).subscribe(() => {
      this.snackBar.open('Usuario guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/Usuarios']);
    })
  }

}
