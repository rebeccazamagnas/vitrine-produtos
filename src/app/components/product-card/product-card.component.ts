import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  template: `
  <div class="card h-100 shadow-sm">
    <img class="card-img-top" [src]="product.thumbnail || product.images?.[0]" [alt]="product.title">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-2">{{ product.title }}</h5>
      <p class="card-text text-muted small flex-grow-1">
        {{ product.description }}
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <strong>{{ product.price | currency:'BRL':'symbol-narrow':'1.2-2' }}</strong>
        <a class="btn btn-primary btn-sm" [routerLink]="['/product', product.id]">Ver detalhes</a>
      </div>
    </div>
  </div>
  `
})
export class ProductCardComponent {
  @Input() product!: IProduct;
}
