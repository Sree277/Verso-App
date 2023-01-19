import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  buyProduct: any = window.history.state.book;
    
  submit(formdata:any){

    console.warn(formdata);
  }
  data={
    fullName:'',
    mobNumber:'',
    pinCode:'',
    address1:'',
    address2:'',
    landmark:'',
    cityName:'',
    country:'',
    state:''
  }
  onsubmit(){
    alert(JSON.stringify(this.data))
  }

}
