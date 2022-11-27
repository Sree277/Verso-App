import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './login/login.component';
import {BooklistComponent} from './booklist/booklist.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'booklist',component:BooklistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
