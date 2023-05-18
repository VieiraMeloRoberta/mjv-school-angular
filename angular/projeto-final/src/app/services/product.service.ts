import { Injectable } from '@angular/core';

//import { Product } from '../shared/models/Product';
import { IProduto, produtos } from '../shared/models/Product';



@Injectable({
  providedIn: 'root',
})
export class ProductService {

  produtos:IProduto[] = produtos;

  constructor() { }

    getAll(){
      return this.produtos;
    }

    getOne(produtoId:number){
      return this.produtos.find(produto => produto.id == produtoId);
    }
}
