import { Component, OnInit } from '@angular/core';
//import { error } from 'console';
//import { format } from 'path';
//import { throws } from 'assert';
import { peticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [peticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userID: any;
  public fecha: any;

  public new_user: any;
  public usuario_guardado: any;

  constructor(
    private _peticionesService: peticionesService
  ) {
    this.userID=1
    this.new_user={
      "name": "",
      "job": ""
    }
   }

  ngOnInit(): void {
    this.fecha = new Date(2019, 5,20);
    this.cargaUsuario();
  }
  cargaUsuario(){
    this.user = false;
    this._peticionesService.getUser(this.userID).subscribe(
      result =>{
        this.user = result.data;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
  onSubmit(form: any): void{
    this._peticionesService.addUser(this.new_user).subscribe(
      response =>{
        this.usuario_guardado=response;
        console.log(this.usuario_guardado);
        form.reset();
      },
      error =>{
        console.log(error);
      }
    )
  }
}
