import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { RESTCountries } from '../../interfaces/pais.interface';
import { CodeCountry } from '../../interfaces/verPais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss'],
})
export class VerPaisComponent implements OnInit {

  //puede ser nulo
  paises: RESTCountries[] = [];


  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( 
        ({code}) => this.paisService.verPais(code)
        ),
      tap( console.log )
    )
    .subscribe(pais => this.paises = pais)
    
  }
}
