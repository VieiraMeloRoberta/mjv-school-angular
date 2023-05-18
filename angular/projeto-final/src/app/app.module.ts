import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//import { NgxMaskPipe} from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
//import { HomeComponent } from './features/pages/home/home.component';
import { ProductComponent } from './features/pages/product/product.component';
import { ContactComponent } from './features/pages/contact/contact.component';
//import { CardComponent } from './features/pages/card/card.component';
import { CartComponent } from './features/pages/cart/cart.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NotFoundComponent } from './features/partials/not-found/not-found.component';
import { SearchComponent } from './features/partials/search/search.component';
registerLocaleData(localePt);


import { FormsModule } from '@angular/forms';
import { ProductDescritionComponent } from './features/pages/product/product-descrition/product-descrition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  //  HomeComponent,
    ProductComponent,
    ContactComponent,
    //CardComponent,
    CartComponent,
    NotFoundComponent,
    SearchComponent,
    ProductDescritionComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
   // NgxMaskPipe,

   MatSnackBarModule,

  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
