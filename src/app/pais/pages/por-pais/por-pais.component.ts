import { Component } from '@angular/core';
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

  constructor( private _paisService: PaisService ) { }

  buscar(){
    this.hayError = false;
    this._paisService.buscarPais( this.termino ).subscribe(
      response => {
        console.log(response);
      },
      error => {
        this.hayError = true;
      }
    );
  }

}
