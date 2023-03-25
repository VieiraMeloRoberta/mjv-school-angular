import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {
  title = "Colaboradores";

  collaborators = [
    {
      id: 1,
      nome:'Nathan Carlos',
      salario: 4500,
      cargo: 'Dev Pl',
      imagem:"https://cdn-icons-png.flaticon.com/512/126/126486.png"
    },
    {
      id: 2,
      nome: 'Alan',
      salario: 4500,
      cargo: 'Desenvolvedor',
      imagem:"https://cdn-icons-png.flaticon.com/512/126/126486.png"
    },
    {
      id: 3,
      nome: 'Bruno',
      salario: 4000,
      cargo: 'Desenvolvedor Java',
      imagem:"https://cdn-icons-png.flaticon.com/512/126/126486.png"
    }
  ]
}


