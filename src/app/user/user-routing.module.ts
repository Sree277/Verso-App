import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSectionComponent } from './login-section/login-section.component';
import { SignupSectionComponent } from './signup-section/signup-section.component';

const routes: Routes = [

  { path: 'login', component: LoginSectionComponent },
  { path: 'signup', component: SignupSectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
