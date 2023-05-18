import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './features/pages/home/home.component';
import { ProductComponent } from './features/pages/product/product.component';
import { ContactComponent } from './features/pages/contact/contact.component';
//import { CardComponent } from './features/pages/card/card.component';
import { CartComponent } from './features/pages/cart/cart.component';
import { NotFoundComponent } from './features/partials/not-found/not-found.component';
import { ProductDescritionComponent } from './features/pages/product/product-descrition/product-descrition.component';


const routes: Routes = [

  {path:'produtos',  component:ProductComponent}, //produtos

  {path:'carrinho', component:CartComponent}, //carrinho
  {path:'contato', component:ContactComponent},//
  {path:'produtos/:id', component:ProductDescritionComponent},//
  {path: "", component: NotFoundComponent}
];



/*
[

  { path: 'produtos', loadChildren: () => import('./product/app.module').then(m => m.AppModule) },
  { path: "", redirectTo:"produtos", pathMatch:"full"},

  { path: 'carrinho', loadChildren: () => import('./app.module').then(m => m.AppModule) },

  { path: 'contato', loadChildren: () => import('./app.module').then(m => m.AppModule) },
  { path: "", component: NotFoundComponent}

];
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forChild
  exports: [RouterModule]
})
export class AppRoutingModule { }
