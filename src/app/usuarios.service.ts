
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "./usuario"
import { environment } from "../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getUsuarios(){
    //return this.listUsuarios.slice();
    return this.http.get(`${this.baseUrl}/login/getAll.php`);
  }

  getUsuario(cod: string | number){
    //return this.listUsuarios.slice();
    return this.http.get(`${this.baseUrl}/get.php?codusuario=${cod}`);
  }

  agregarUsuario(usuario: Usuario){
    //this.listUsuarios.unshift(usuario);
    return this.http.post(`${this.baseUrl}/post.php`, usuario);
  }
  
  eliminarUsuario(usuario: Usuario){
    //this.listUsuarios.splice(index, 1);
    return this.http.get(`${this.baseUrl}/delete.php?codusuario=${usuario.cod}`);
  }

  editarUsuario(usuario: Usuario){
    return this.http.put(`${this.baseUrl}/update.php`, usuario);
  }
}
