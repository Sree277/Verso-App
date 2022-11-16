import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { OfferboxComponent } from './offerbox/offerbox.component';
import { IconpartComponent } from './iconpart/iconpart.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { VersoFeatureComponent } from './verso-feature/verso-feature.component';
import { CardSectionComponent } from './card-section/card-section.component';





@NgModule({
  declarations: [
    AppComponent,
    SearchNavComponent,
    NavbarComponent,
    MainComponent,
    OfferboxComponent,
    IconpartComponent,
    FavoriteComponent,
    VersoFeatureComponent,
    CardSectionComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
   CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
