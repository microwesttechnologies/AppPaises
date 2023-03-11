import { Component, Input } from '@angular/core';
import { RESTCountries } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.scss']
})

export class PaisTablaComponent {

  error: boolean = false;
  termino: string = "";
  paises: RESTCountries[] = [];
 


  constructor(private paisService: PaisService) {}

 
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
