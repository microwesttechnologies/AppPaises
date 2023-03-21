import { Component, Input } from '@angular/core';
import { RESTCountries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.scss']
})
export class PaisTableComponent {

 @Input() paises: RESTCountries[] = [];
 @Input() termino: string = "";
 show: boolean = false;

}
