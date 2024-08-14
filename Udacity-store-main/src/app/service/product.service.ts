import { Injectable, OnInit } from '@angular/core';
import { CartItemDto } from './cart.dto';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ProductDto } from './product.dto';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnInit {
  private productSubject: BehaviorSubject<ProductDto[]> = new BehaviorSubject<
    ProductDto[]
  >([]);
  products = this.productSubject.asObservable();

  constructor(private readonly httpService: HttpService) {}
  ngOnInit(): void {
    this.httpService.getProducts().subscribe((data: ProductDto[]) => {
      this.productSubject.next(data);
    });
  }
}
