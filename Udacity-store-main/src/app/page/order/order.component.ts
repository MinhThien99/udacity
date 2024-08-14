import { OrderService } from './../../service/order.service';
import { Component, Input } from '@angular/core';
import { OrderDto } from '../../service/order.dto';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CartTableComponent } from '../cart/cart-table/cart-table.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [MatCardModule, CartTableComponent, MatIconModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  order: OrderDto = {
    fullName: '',
    phoneNumber: '',
    address: '',
    note: '',
    email: '',
    cart: [],
    id: '',
  };
  constructor(
    private readonly orderService: OrderService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.order = this.orderService.getOrder(
      this.activatedRoute.snapshot.params['id']
    );
    console.log('[ LOG ]  OrderComponent  this.order:', this.order.cart);
  }
}
