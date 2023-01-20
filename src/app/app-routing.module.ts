import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { FictionComponent } from './fiction/fiction.component';
import { HomeComponent } from './home/home.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { RentSectionComponent } from './rent-section/rent-section.component';
import { StoryChildrensComponent } from './story-childrens/story-childrens.component';
import { UsedBookComponent } from './used-book/used-book.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { LoveStoryComponent } from './love-story/love-story.component';
import { PoetryComponent } from './poetry/poetry.component';
import { CookingComponent } from './cooking/cooking.component';
import { ClassicComponent } from './classic/classic.component';
import { LoginSectionComponent } from './login-section/login-section.component';
import { SignupSectionComponent } from './signup-section/signup-section.component'
import { DiscountofferSectionComponent } from './discountoffer-section/discountoffer-section.component';

const routes: Routes = [

  {
    path: 'admin', loadChildren: () => import('./admin/admin.module')
      .then(mod => mod.AdminModule)
  },

  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'NewArrivals', component: NewArrivalComponent },
  { path: 'Rentbook', component: RentSectionComponent },
  // {path:'Catogary',component:},
  { path: 'Usedbook', component: UsedBookComponent },
  { path: 'RareCollections', component: FavoriteComponent },
  { path: 'fiction', component: FictionComponent },
  { path: 'childrensStory', component: StoryChildrensComponent },
  { path:  'bookDetails' , component: BookDetailsComponent},
  { path:  'addtoCart' , component:AddCartComponent},
  { path:  'buyProduct' , component:BuyProductComponent},
  { path: 'loveStory', component:LoveStoryComponent},
  { path: 'poetry', component:PoetryComponent},
  { path: 'cooking', component:CookingComponent},
  { path: 'classic', component:ClassicComponent},
  { path: 'login', component:LoginSectionComponent},
  { path: 'signup' , component:SignupSectionComponent},
  { path: 'disscountOffer', component:DiscountofferSectionComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
