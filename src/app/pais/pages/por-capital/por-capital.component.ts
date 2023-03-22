import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Capital } from '../../interfaces/capitales.interface';
import { RESTCountries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss'],
})
export class PorCapitalComponent {
  capitales: Capital[] = [];
  termino: string = '';
  error: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.error = false;

    this.paisService.buscarCapital(this.termino).subscribe(
      (capitales) => {
        this.capitales = capitales;
      },
      (err) => {
        this.error = true;
        this.capitales = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.error = false;
  }
}
