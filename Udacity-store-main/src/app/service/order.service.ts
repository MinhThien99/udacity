import { Injectable } from '@angular/core';
import { CartItemDto } from './cart.dto';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ProductDto } from './product.dto';
import { OrderDto } from './order.dto';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private cartSubject: BehaviorSubject<OrderDto[]> = new BehaviorSubject<
    OrderDto[]
  >(JSON.parse(localStorage.getItem('orders') || '[]'));
  public orders = this.cartSubject.asObservable();

  createOrder(order: OrderDto) {
    let currentCart = [...this.cartSubject.value];
    this.cartSubject.next([...currentCart, order]);
  }

  getOrder(orderId: string): OrderDto {
    let currentCart = [...this.cartSubject.value];
    return currentCart.find((e) => e.id === orderId) as OrderDto;
  }

  constructor() {
    this.orders.subscribe((data) => {
      localStorage.setItem('orders', JSON.stringify(data));
    });
  }
}
