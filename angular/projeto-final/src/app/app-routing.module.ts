import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './features/pages/product/product.component';
import { ContactComponent } from './features/pages/contact/contact.component';
import { CartComponent } from './features/pages/cart/cart.component';
import { NotFoundComponent } from './features/partials/not-found/not-found.component';
import { ProductDescritionComponent } from './features/pages/product/product-descrition/product-descrition.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'produtos', component: ProductComponent },
  { path: 'carrinho', component: CartComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'produtos/:id', component: ProductDescritionComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
