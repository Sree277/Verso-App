import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginSectionComponent } from './login-section/login-section.component';
import { SignupSectionComponent } from './signup-section/signup-section.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginSectionComponent,
    SignupSectionComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
