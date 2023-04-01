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

  produto1 = {
    descricao: 'Playstation 5 1TB',
    preco: 4500.0,
    quantidade: 1,
    imagem:
      'https://cdn.awsli.com.br/600x450/2443/2443989/produto/189093503e1b743af49.jpg',
  };

  produtos: Array<Product> = [
    {
      descricao: 'Playstation 5 1TB',
      preco: 4500.0,
      quantidade: 0,
      imagem:
        'https://cdn.awsli.com.br/600x450/2443/2443989/produto/189093503e1b743af49.jpg',
      disponivel: false,
    },
    {
      descricao: 'Playstation 5',
      preco: 4500.0,
      quantidade: 2,
      imagem:
        'https://cdn.awsli.com.br/600x450/2443/2443989/produto/189093503e1b743af49.jpg',
      disponivel: true,
    },
    {
      descricao: 'Playstation 5',
      preco: 4500.0,
      quantidade: 1,
      imagem:
        'https://cdn.awsli.com.br/600x450/2443/2443989/produto/189093503e1b743af49.jpg',
      disponivel: true,
    },
    {
      descricao: 'Playstation 5 1TB',
      preco: 4500.0,
      quantidade: 2,
      imagem:
        'https://cdn.awsli.com.br/600x450/2443/2443989/produto/189093503e1b743af49.jpg',
      disponivel: true,
    },
    {
      descricao: 'Playstation 5 1TB',
      preco: 4500.0,
      quantidade: 1,
      imagem:
        'https://cdn.awsli.com.br/600x450/2443/2443989/produto/189093503e1b743af49.jpg',
      disponivel: true,
    },
    {
      descricao: 'Playstation 5 1TB',
      preco: 4500.0,
      quantidade: 0,
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

  obterDesconto() {
    return (this.produto1.preco = this.produto1.preco * 0.9);
  }

  comprar() {
    alert('Produto comprado!');
  }

  passouMouse() {
    alert('Aproveite o desconto!');
  }

  pressinouTecla(event: any) {
    console.log(event.target.value);
  }

  exibeProdutoSimNao() {
    this.exibeProduto = !this.exibeProduto;
  }
}
