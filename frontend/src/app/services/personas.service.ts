import { Injectable } from '@angular/core';
import { Global } from "./global";
import { HttpClient ,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Persona } from "../models/persona";

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  public url:String;

  constructor(
    private _http : HttpClient
  ) { 
    this.url = Global.url
  }


  consultar_personas() : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.get(this.url+"/personas",{headers:headers});
  }

  registrar_persona( datos: any ): Observable<any>{

    let data = JSON.stringify(datos);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'guardar-persona', data, {headers: headers});
  }

  eliminar_persona(cedula: any ): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.delete(this.url+"persona/"+cedula,{headers:headers});
  }

  getPersona(cedula : any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.get(this.url+"persona/"+cedula,{headers:headers});
  }

  actualizarPersona( persona: Persona): Observable<any>{
    
    let params = JSON.stringify(persona);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.put(this.url+'persona/'+persona.cedula, params, {headers: headers});
  }


}
