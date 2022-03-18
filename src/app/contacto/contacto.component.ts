import { Component, OnInit } from '@angular/core';
import { contactoUsuario } from '../models/usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public contacto_usuario: contactoUsuario;
  public show_data: any | undefined;
  constructor() {
    this.contacto_usuario = new contactoUsuario('','','','')
  }

  ngOnInit(): void {
  }

  onSubmit(_form: any): void{
    //form.reset();
    this.show_data = this.contacto_usuario;
    console.log("Lanzado")
    console.log(this.contacto_usuario)
  }
}
