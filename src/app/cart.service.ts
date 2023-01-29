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
      if (quantity < 0 && cartItem.quantity == 1) {
        this.removeFromCart(id);
      }
      cartItem.quantity = cartItem.quantity + quantity;
    }
    else {
      this.cartList.push({ id: id, quantity: quantity });
    }
  }

  removeFromCart(id: number) {
    const index = this.cartList.findIndex((item: any) => item.id == id);
    if (index > -1) {
      const x = this.cartList.splice(index, 1);
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
