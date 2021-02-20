import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent{

  public regiones: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania' ];
  public regionActiva: string = '';
  public paises: Country[] = [];

  constructor( private _paisService: PaisService ) { }

  activarRegion( region: string ){
    
    if(region === this.regionActiva ){
      return;
    }
    
    this.regionActiva = region;
    this.paises = [];

    this._paisService.buscarRegion( region ).subscribe(
      response => {
        this.paises = response;
      }
    )

  }

  getClaseCSS( region: string ): string {
    return ( region === this.regionActiva) ? 'btn btn-primary m-1' : 'btn btn-outline-primary m-1';
  }

}
