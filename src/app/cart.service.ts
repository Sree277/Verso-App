import { Injectable } from '@angular/core';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private bookService: BookService) { }
  cartList: Array<any> = [];

  addToCart(id: number, quantity: number) {
    this.cartList.push({ id: id, quantity: quantity });
  }

  getCartList() {
    let carrListData: Array<any> = [];

    this.cartList.forEach(item => {
      let productData = this.bookService.getBookById(item.id);
      carrListData.push({ id: item.id, quantity: item.quantity, productData: productData })
    });

    return carrListData;
  }

}
