import { Injectable } from "@angular/core";
import { Tenis } from "../models/tenis";

@Injectable()

export class TenisService{
    public tenis: Array<Tenis>;
    constructor(){
        this.tenis = [
            new Tenis('Reebook', 'Reebok', 'Blando', 1000, true),
            new Tenis('Nike', 'Nike', 'Blando', 1200, true),
            new Tenis('Nike', 'Reebok', 'Blando', 1500, false)
        ];
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }

    getTenis():Array<Tenis>{
        return this.tenis;
    }
}