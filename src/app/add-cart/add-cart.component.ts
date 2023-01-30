import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {


  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }
  addCart: any = window.history.state.book;

  cartList: Array<any> = this.cartService.getCartList();
  taxPercentage: number=5;
  deliveryCharge:number=50;


  reloadCartList() {
    
    this.cartList = this.cartService.getCartList();
  }

  delete(id: number) {
    this.cartService.removeFromCart(id);
    this.reloadCartList();
  }

  increaseQuantity(id: number) {
    this.cartService.addToCart(id, 1);
    this.reloadCartList();
  }

  decreaseQuantity(id: number,) {
    this.cartService.addToCart(id, -1);
    this.reloadCartList();
  }
  getTotal(){
    
    let total:number=0;
    for(let item of this.cartList)
    { 
      total=total+(item.productData.bookPrize*item.quantity)

    }
    return total;
  }
  getTax(){
    let total:number=this.getTotal();
    return total*this.taxPercentage/100;
  }

  getGrandTotal(){
    let total:number=this.getTotal();
    let tax:number=this.getTax();
    return total+tax+this.deliveryCharge;
  }

}
