import { Routes } from '@angular/router';
import { CartComponent } from './page/cart/cart.component';
import { OrderComponent } from './page/order/order.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';

export const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: OrderComponent },
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'order/:id', component: OrderComponent },
];
