import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[];
  public buscado: string = 'Capital';

  constructor( private _paisService: PaisService ) { 
    this.paises = [];
  }

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;

    this._paisService.buscarCapital( this.termino ).subscribe(
      response => {
        this.paises = response;
        console.log(response);
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
