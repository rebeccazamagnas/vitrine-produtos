import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgIf],
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" [routerLink]="['/']">Vitrine</a>
      <div class="ms-auto d-flex align-items-center gap-3">
        <a class="btn btn-outline-light" [routerLink]="['/checkout']">Checkout</a>
        <a class="btn btn-light position-relative" [routerLink]="['/checkout']" aria-label="Carrinho">
          🛒
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                *ngIf="(count$ | async) as c">
            {{ c }}
          </span>
        </a>
      </div>
    </div>
  </nav>
  `
})
export class HeaderComponent {
  count$!: Observable<number>;

  constructor(private cart: CartService) {
    this.count$ = this.cart.count$; // agora só depois da injeção
  }
}
