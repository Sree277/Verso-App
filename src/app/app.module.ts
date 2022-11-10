import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { OfferboxComponent } from './offerbox/offerbox.component';
import { IconpartComponent } from './iconpart/iconpart.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchNavComponent,
    NavbarComponent,
    MainComponent,
    OfferboxComponent,
    IconpartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
