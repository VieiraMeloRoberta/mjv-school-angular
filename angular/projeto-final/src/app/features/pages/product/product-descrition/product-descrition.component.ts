import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { NotFoundService } from 'src/app/services/not-found.service';
import { ProductService } from 'src/app/services/product.service';
import { IProduto, IProdutoCarrinho} from 'src/app/shared/models/Product';


@Component({
  selector: 'app-product-descrition',
  templateUrl: './product-descrition.component.html',
  styleUrls: ['./product-descrition.component.scss']
})
export class ProductDescritionComponent {
  estoque= 1;
  quantidade= 1 ;
  produto: IProduto | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private notFoundService: NotFoundService,
    private cartService: CartService,
  ) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.productService.getOne(produtoId);
  }
  adicionarAoCarrinho() {
    this.notFoundService.notificar("O produto foi adicionado ao carrinho!")
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.cartService.adicionarAoCarrinho(produto)
  };

}
