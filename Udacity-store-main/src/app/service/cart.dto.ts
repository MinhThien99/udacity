import { ProductDto } from './product.dto';

export class CartItemDto {
  position?: number;
  productId: number;
  name?: string;
  price?: number;
  url?: string;
  quantity: number;

  constructor(product: ProductDto, pos?: number) {
    // (this.position = pos),
    this.productId = product?.id || 0;
    this.name = product.name;
    this.price = product.price;
    this.url = product.url;
    this.quantity = 1;
  }
}
