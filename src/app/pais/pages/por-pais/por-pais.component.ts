import { Component } from '@angular/core';
import { RESTCountries } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent {

  termino: string = '';
  error: boolean = false;
  paises: RESTCountries[] = [];

  constructor(private paisService: PaisService) { }

  buscar() {
    console.log(this.termino)

    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        this.paises = paises;
        console.log(paises);
                
      }, (err) => {
        this.error = true;
        this.paises = [];
      });

  }

}
