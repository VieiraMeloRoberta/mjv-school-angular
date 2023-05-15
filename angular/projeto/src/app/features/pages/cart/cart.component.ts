import { Route, Router } from '@angular/router';
import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart!: Cart;
  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {}
}
