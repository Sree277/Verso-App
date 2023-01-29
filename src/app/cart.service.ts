import { Injectable } from '@angular/core';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private bookService: BookService) { }
  cartList: Array<any> = [];

  addToCart(id: number, quantity: number) {
    let cartItem = this.cartList.find((item) => item.id == id);
    if (cartItem) {
      cartItem.quantity = cartItem.quantity + quantity;
    }
    else {
      this.cartList.push({ id: id, quantity: quantity });
    }
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
