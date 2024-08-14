import { Injectable } from '@angular/core';
import { CartItemDto } from './cart.dto';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ProductDto } from './product.dto';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  a = localStorage.getItem('cart') || '[]';
  private cartSubject: BehaviorSubject<CartItemDto[]> = new BehaviorSubject<
    CartItemDto[]
  >(JSON.parse(this.a));
  public cart = this.cartSubject.asObservable();

  addCart(product: ProductDto) {
    let currentCart = [...this.cartSubject.value];
    const existedItem = currentCart.find((e) => e.productId === product.id);
    if (existedItem) existedItem.quantity += 1;
    else {
      let a = new CartItemDto(product, currentCart?.length);
      currentCart = [...currentCart, a];
    }

    this.cartSubject.next([...currentCart]);
  }

  removeCartItem(index: number) {
    this.cartSubject.next(
      this.cartSubject.getValue().filter((e, i) => i !== index)
    );
  }

  clearCartItem() {
    this.cartSubject.next([]);
  }

  getCartLength() {
    return this.cartSubject.getValue()?.length;
  }
  constructor() {
    this.cart.subscribe((data) => {
      localStorage.setItem('cart', JSON.stringify(data));
    });
  }
}
