import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  titulo = 'Lista de Produtos';

  exibeProduto = true;

  produto = {
    descricao: 'Playstation 5',
    preco: 4500,
    quantidade: 1,
    imagem:
      'https://cdn.awsli.com.br/600x450/2443/2443989/produto/189093503e1b743af49.jpg',
  };

  produtos: Array<Product> = [
    {
      descricao: 'Playstation 5',
      preco: 4500,
      quantidade: 1,
      imagem:
        'https://cdn.awsli.com.br/600x450/2443/2443989/produto/189093503e1b743af49.jpg',
      disponivel: true,
    },
    {
      descricao: 'Playstation 5 1TB',
      preco: 4500,
      quantidade: 1,
      imagem:
        'https://cdn.awsli.com.br/600x450/2443/2443989/produto/189093503e1b743af49.jpg',
      disponivel: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {
    for (const iterator of this.produtos) {
    }
  }
  precoComDesconto(preco: number) {
    return preco * 0.9;
  }
  obterPrecoDesconto() {
    this.produto.preco = this.produto.preco * 0.9;
  }

  comprar() {
    alert('Produto comprado com sucesso!');
  }

  clicouTag() {
    alert('Você clicou em uma tag');
  }

  passouMouse() {
    alert('Você passou o mouse em cima de uma tag');
  }

  pressinouTecla(event: any) {
    console.log(event.target.value);
  }
  exibeProdutosSimNao() {
    this.exibeProduto = !this.exibeProduto;
  }
}