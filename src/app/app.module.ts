import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardsListComponent } from './cards/components/cards-list/cards-list.component';
import { CardsDetailComponent } from './cards/components/cards-detail/cards-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsListComponent,
    CardsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
