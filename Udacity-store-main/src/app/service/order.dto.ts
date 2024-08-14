import { CartItemDto } from './cart.dto';
import { SubmitCreateOrderForm } from './form';

export class OrderDto implements SubmitCreateOrderForm {
  id: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  note: string;
  email: string;
  cart: CartItemDto[];

  constructor(form: SubmitCreateOrderForm, cart: CartItemDto[]) {
    this.id = new Date().getTime().toString();
    this.fullName = form.fullName;
    this.phoneNumber = form.phoneNumber;
    this.address = form.address;
    this.note = form.note;
    this.email = form.email;
    this.cart = cart;
  }
}
