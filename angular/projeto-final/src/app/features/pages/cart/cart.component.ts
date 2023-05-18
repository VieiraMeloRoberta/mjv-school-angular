import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IProdutoCarrinho } from '../../../shared/models/Product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

 itensCarrinho: IProdutoCarrinho[] = [];
 total = 0;
quantidade: any;

  constructor(
    public cartService: CartService, private router: Router
  ){}

  ngOnInit(): void {
    this.itensCarrinho = this.cartService.obtemCarrinho();
    this.calculaTotal();
  }

  calculaTotal(): void{
    this.total = this.itensCarrinho.reduce((prev,curr) => prev + (curr.preco * curr.quantidade),0)
  }

  removeProdutoCarrinho(produtoId:number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.cartService.removerProdutoCarrinho(produtoId);
    this.calculaTotal();
  }

  comprar(){
    alert("Parabéns, você finalizou a sua compra com sucesso!");
    this.cartService.limparCarrinho();
    this.router.navigate(["produtos"]);
    console.log("produtos")
  }
}
