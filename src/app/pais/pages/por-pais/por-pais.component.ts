import { Component } from '@angular/core';
import { RESTCountries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss'],
})
export class PorPaisComponent {
  paises: RESTCountries[] = [];
  termino: string = '';
  error: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {

    this.termino = termino;
    this.error = false;

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
  }
}


