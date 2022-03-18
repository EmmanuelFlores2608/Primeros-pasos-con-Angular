import { inject } from "@angular/core/testing";
import { HttpClient, HttpHeaders } from "@angular/common/http"; //Permiten hacer peticiones AJAX y modificar las cabeceras de las peticiones
import { Observable } from "rxjs"; //Recoge las peticiones que devuelve el API REST al hacer una petición
import { Injectable } from "@angular/core";

 @Injectable()
export class peticionesService{
    public url: string;
    constructor(
        public _http: HttpClient
    ){
        this.url = "https://reqres.in/";
    }
    getUser(userID: any): Observable<any>{
        return this._http.get(this.url+'api/users/'+userID)
    }
    addUser(user: any): Observable<any>{
        let params= JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        
        return this._http.post(this.url+'api/users', params, {headers: headers});
    }
}