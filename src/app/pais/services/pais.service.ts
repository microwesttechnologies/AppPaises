import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Capital } from '../interfaces/capitales.interface';
import { RESTCountries } from '../interfaces/pais.interface';
import { CodeCountry } from '../interfaces/verPais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private api: string = environment.apiUrl;
  private api2: string = environment.api2Url;
  private api3: string = environment.api3Url;
  private api4: string = environment.api4Url;

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<RESTCountries[]> {
    const url = this.api + termino;

    return this.http.get<RESTCountries[]>(url);
  }

  buscarCapital(termino: string): Observable<Capital[]> {
    const url = this.api2 + termino;
    console.log(termino);
    console.log(url);

    return this.http.get<Capital[]>(url);
  }

  verPais(code: string): Observable<CodeCountry[]> {
    const url = this.api3 + code;
    console.log('Por servicio: ', code);
    console.log(url);

    return this.http.get<CodeCountry[]>(url);
  }

  buscarRegion(region: string): Observable<CodeCountry[]> {
    const url = this.api4 + region;
    console.log('Por servicio region: ', region);
    console.log(url);
    return this.http.get<CodeCountry[]>(url);
  }
}
