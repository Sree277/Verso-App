import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private bookService: BookService) {
  }

  cartList: Array<any> = [];
  cartItemCount: Subject<number> = new Subject<number>();

  addToCart(id: number, quantity: number) {
    let cartItem = this.cartList.find((item) => item.id == id);
    if (cartItem) {
      if (quantity < 0 && cartItem.quantity == 1) {
        this.removeFromCart(id);
      }
      cartItem.quantity = cartItem.quantity + quantity;
    }
    else {
      this.cartList.push({ id: id, quantity: quantity });
    }

    this.cartItemCount.next(this.cartList.length);
  }

  removeFromCart(id: number) {
    const index = this.cartList.findIndex((item: any) => item.id == id);
    if (index > -1) {
      const x = this.cartList.splice(index, 1);
    }

    this.cartItemCount.next(this.cartList.length);
  }

  getCartList() {
    let cartListData: Array<any> = [];

    this.cartList.forEach(item => {
      let productData = this.bookService.getBookById(item.id);
      cartListData.push({ id: item.id, quantity: item.quantity, productData: productData })
    });

    return cartListData;
  }



}
