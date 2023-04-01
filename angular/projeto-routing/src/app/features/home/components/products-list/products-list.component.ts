import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {



product = {
      id: 1,
      description: 'Iphone 11',
      price: 3500,
      imagem: 'https://a-static.mlcdn.com.br/800x560/iphone-11-apple-64gb-product-red-61-12mp-ios/magazineluiza/155610700/7fe7cd29526ec4fc95727aee8e85e5a5.jpg',
  };

  products: Array<Product> = [
    {
      id: 1,
      description: 'Iphone 11',
      price: 3500,
    //imagem: 'https://a-static.mlcdn.com.br/800x560/iphone-11-apple-64gb-product-red-61-12mp-ios/magazineluiza/155610700/7fe7cd29526ec4fc95727aee8e85e5a5.jpg'
    },
    {
      id: 2,
      description: 'Iphone 12',
      price: 4000,
      //image: 'https://a-static.mlcdn.com.br/800x560/iphone-11-apple-64gb-product-red-61-12mp-ios/magazineluiza/155610700/7fe7cd29526ec4fc95727aee8e85e5a5.jpg'
    },
    {
      id: 3,
      description: 'Iphone 13',
      price: 4500
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
