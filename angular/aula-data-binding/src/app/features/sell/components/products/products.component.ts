import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Produtos";


  produto = {
    descricao: "Playstation 5",
    preco: 4500,
    quantidade: 1,
    imagem:"https://cdn.awsli.com.br/600x450/2443/2443989/produto/189093503e1b743af49.jpg"
  }

  constructor() { }

  ngOnInit(): void {
    console.log("teste")
  }
  precoComDesconto(preco: number) {
    return preco * 0.90;
}
}
