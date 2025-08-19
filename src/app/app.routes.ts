import { Routes } from '@angular/router';
import { ProductsListPage } from './pages/products-list/products-list.page';
import { ProductDetailsPage } from './pages/product-details/product-details.page';
import { CheckoutPage } from './pages/checkout/checkout.page';

export const routes: Routes = [
  { path: '', component: ProductsListPage },
  { path: 'product/:id', component: ProductDetailsPage },
  { path: 'checkout', component: CheckoutPage },
  { path: '**', redirectTo: '' },
];
