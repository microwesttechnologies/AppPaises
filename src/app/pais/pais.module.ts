import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { ErrosComponent } from './pages/erros/erros.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';





@NgModule({
  declarations: [
    PorPaisComponent,
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent,
    ErrosComponent,
    PaisTablaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PorPaisComponent,
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent,
    ErrosComponent,
    PaisTablaComponent
   
  ]
})
export class PaisModule { }
