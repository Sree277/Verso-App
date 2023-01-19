import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.css']
})
export class LoginSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginUser(value:any)
  {
    console.warn(value);
  }

  data = {
    cntrolEmail: '',
    controlPassword: '',
  }
  onSubmit(){
       alert(JSON.stringify(this.data))
  }

}
