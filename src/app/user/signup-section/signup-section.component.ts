import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-section',
  templateUrl: './signup-section.component.html',
  styleUrls: ['./signup-section.component.css']
})
export class SignupSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signupUser(value:any)
  {
    console.warn(value);
  }
  data = {
    sEmail:'',
    spassword:''
  }
  onSubmit(){
    alert(JSON.stringify(this.data))

  }

}
