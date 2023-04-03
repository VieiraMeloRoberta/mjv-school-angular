import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaColabsComponent } from './components/colaboradores/lista-colabs/lista-colabs.component';



@NgModule({
  declarations: [
    ListaColabsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaColabsComponent
  ]
})
export class FeaturesModule { }
