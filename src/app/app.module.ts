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
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { FictionComponent } from './fiction/fiction.component';
import { SubPart1Component } from './sub-part1/sub-part1.component';
import { DiscountComponent } from './discount/discount.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { RentSectionComponent } from './rent-section/rent-section.component';
import { UsedBookComponent } from './used-book/used-book.component';





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
    NewArrivalComponent,
    FictionComponent,
    SubPart1Component,
    DiscountComponent,
    CategoryComponent,
    FooterComponent,
    RentSectionComponent,
    UsedBookComponent,
    
    
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
