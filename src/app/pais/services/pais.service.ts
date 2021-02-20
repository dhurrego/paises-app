import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams(){
    return new HttpParams().set("fields", "name;capital;alpha2Code;flag;population");
  }

  constructor( private _http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]>{

    const url = `${ this._apiUrl }/name/${ termino }`;

    return this._http.get<Country[]>( url, { params: this.httpParams } );

  }

  buscarCapital( termino: string ): Observable<Country[]>{

    const url = `${ this._apiUrl }/capital/${ termino }`;

    return this._http.get<Country[]>( url, { params: this.httpParams } );

  }

  buscarRegion( termino: string ): Observable<Country[]>{

    const url = `${ this._apiUrl }/region/${ termino }`;

    return this._http.get<Country[]>( url, { params: this.httpParams } ).pipe( tap( console.log ) );

  }

  getPaisPorCodigo( id: string ): Observable<Country>{

    const url = `${ this._apiUrl }/alpha/${ id }`;

    return this._http.get<Country>( url );

  }

  
}
