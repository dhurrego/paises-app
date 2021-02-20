import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  public termino: string = '';
  public hayError: boolean = false;
  public mostrarSugerencias: boolean = false;
  public paises: Country[];
  public paisesSugeridos: Country[];
  public buscado: string = 'País';

  constructor( private _paisService: PaisService ) { 
    this.paises = [];
    this.paisesSugeridos = [];
  }

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this._paisService.buscarPais( this.termino ).subscribe(
      response => {
        this.paises = response;
        this.paisesSugeridos = [];
      },
      error => {
        this.hayError = true;
        this.paises = [];
        this.paisesSugeridos = [];
      }
    );
  }

  sugerencias( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this._paisService.buscarPais( termino ).subscribe( 
      paises => {
        this.paisesSugeridos = paises.splice(0,5)
      },
      error => {
        this.paisesSugeridos = [];
      }
    );
  }

}
