import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { RESTCountries } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private api:string = environment.apiUrl; 
 

  constructor( private http: HttpClient) { }


  buscarPais(termino: string): Observable<RESTCountries[]> {

    const url = this.api+termino;

    return  this.http.get<RESTCountries[]>(url);

  }

}
