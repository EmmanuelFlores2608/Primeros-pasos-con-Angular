import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Tenis } from '../models/tenis'
import { TenisService } from '../services/tenis.service';

@Component({
    selector: 'tenis',
    templateUrl: "./tenis.component.html",
    providers: [TenisService]
})
export class tenisComponent implements OnInit{
    public titulo: string =  "Componente de tenis";
    public listado: string = "Listado de las marcas de tenis más populares";
    public tenis: Array<Tenis> = [];
    public marcas: String[];
    public color: string;
    public mi_marca : string;
    
    constructor(
        private _tenisService: TenisService 
    ){
        this.mi_marca = "";
        this.color = "red";
        this.marcas = new Array();
    }
    ngOnInit() {
        //console.log(this.tenis);
        this.tenis = this._tenisService.getTenis();
        //alert(this._tenisService.getTexto());
        this.getMarcas();
    }
    getMarcas(){
        this.tenis.forEach((tenis, index)=>{
            if(this.marcas.indexOf(tenis.marca)<0){
                this.marcas.push(tenis.marca);
            }
            
        });
        console.log(this.marcas);
    }
    getMarca(){
        alert(this.mi_marca);
    }
    addMarca(){
        this.marcas.push(this.mi_marca);
    }
    borrarMarca(index: number){
        //delete this.marcas[index];
        this.marcas.splice(index, 1)
    }
    mostrarPalabra(){
        alert(this.mi_marca);
    }
}