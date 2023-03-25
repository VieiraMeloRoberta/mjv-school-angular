import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SellModule } from './features/sell/sell.module';
import { SharedModule } from './shared/shared.module';
import { RedDirective } from './red.directive';

@NgModule({
  declarations: [
    AppComponent,
    RedDirective
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
