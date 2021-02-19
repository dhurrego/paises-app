import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private _http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]>{

    const url = `${ this._apiUrl }/name/${ termino }`;

    return this._http.get<Country[]>( url );

  }

  buscarCapital( termino: string ): Observable<Country[]>{

    const url = `${ this._apiUrl }/capital/${ termino }`;

    return this._http.get<Country[]>( url );

  }

  
}
