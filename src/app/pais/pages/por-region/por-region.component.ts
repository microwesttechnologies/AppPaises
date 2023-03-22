import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { RESTCountries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss'],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: RESTCountries[] = [];
  region: string = '';
  error: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {}

  getClasCSS(region: string) {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region == this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];



    this.activatedRoute.params
      .pipe(
        switchMap(({ region = this.regionActiva }) =>
          this.paisService.buscarRegion(region)
        ),
        tap(console.log)
      )
      .subscribe((paises) => (this.paises = paises));
  }
}
