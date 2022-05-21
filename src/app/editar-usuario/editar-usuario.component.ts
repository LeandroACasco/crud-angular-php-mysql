
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from "../usuarios.service"
import { Usuario } from '../usuario';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editar-Usuario',
  templateUrl: './editar-Usuario.component.html',
  styleUrls: ['./editar-Usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  public Usuario: Usuario = new Usuario("", "",undefined, "","", undefined,undefined, "","", "",undefined, undefined,undefined,undefined,"", 0);

  constructor(private route: ActivatedRoute,
    private router: Router, private UsuariosService: UsuariosService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idUsuario = this.route.snapshot.paramMap.get("id");
    this.UsuariosService.getUsuario(idUsuario).subscribe((Usuario: Usuario) => this.Usuario = Usuario)
  }

  volver() {
    this.router.navigate(['/Usuarios']);
  }

  onSubmit() {
    this.UsuariosService.editarUsuario(this.Usuario).subscribe(() => {
      this.snackBar.open('Usuario actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}
