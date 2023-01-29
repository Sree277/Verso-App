import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addCart: any = window.history.state.book;

  cartList: Array<any> = this.cartService.getCartList()

}
