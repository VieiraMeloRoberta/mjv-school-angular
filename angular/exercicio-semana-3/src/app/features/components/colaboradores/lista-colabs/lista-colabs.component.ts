import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-colabs',
  templateUrl: './lista-colabs.component.html',
  styleUrls: ['./lista-colabs.component.scss'],
})
export class ListaColabsComponent {
  title: string = 'Listagem de Colaboradores';
  colab: Colabs[] = [];

  constructor() {
    this.colab = [
      {
        id: 1,
        imagem: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
        nome: 'Nathan Carlos',
        cargo: 'Dev Pl',
      },
      {
        id: 2,
        imagem: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
        nome: 'Alan',
        cargo: 'Desenvolvedor',
      },
      {
        id: 3,
        imagem: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
        nome: 'Bruna',
        cargo: 'Desenvolvedor Java',
      },
      {
        id: 4,
        imagem: 'https://cdn-icons-png.flaticon.com/512/126/126486.png',
        nome: 'Giovanna',
        cargo: 'Analista',
      },
    ];
  }

  ngOnInit(): void {}
}

interface Colabs {
  id: number;
  imagem: any;
  nome: string;
  cargo: string;
}
