import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  product!: Product;
  constructor(activatedRoute: ActivatedRoute, productService: ProductService) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.product = productService.getProductById(params['id']);
    });
  }

  ngOnInit(): void {}
}
