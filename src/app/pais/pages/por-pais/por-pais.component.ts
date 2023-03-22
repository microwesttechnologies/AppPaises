import { Component} from '@angular/core';
import { RESTCountries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss'],
})
export class PorPaisComponent {
  paises            : RESTCountries[] = [];
  paisesSugerencias : RESTCountries[] = [];
  termino           : string          = '';
  error             : boolean         = false;
  mostrarSugerencia : boolean         = false;
   

  constructor(private paisService: PaisService) {}



  buscar(termino: string) {

    this.termino = termino;
    this.error = false;
    this.mostrarSugerencia = false;
    
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
      }, (err) => {
        this.error = true;
        this.paises = [];
      }
    );
    
  }

  sugerencias(termino: string) {
    this.error = false;
    this.termino = termino;
    this.mostrarSugerencia = true;

    this.paisService.buscarPais(termino)
    .subscribe( paises => this.paisesSugerencias = paises.splice(0,5),
    (err)=> this.paisesSugerencias = [],
    );
    
  }

  
}


