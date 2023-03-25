import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsComponent } from './collaborators/collaborators.component';



@NgModule({
  declarations: [
    CollaboratorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CollaboratorsComponent
  ]
})
export class FeaturesModule { }
