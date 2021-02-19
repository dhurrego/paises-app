import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[];
  
  constructor( private _paisService: PaisService ) { 
    this.paises = [];
  }

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;

    this._paisService.buscarPais( this.termino ).subscribe(
      response => {
        this.paises = response;
      },
      error => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias( termino: string ){
    this.hayError = false;
  }

}
