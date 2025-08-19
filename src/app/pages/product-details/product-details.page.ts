import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, UpperCasePipe, NgIf, NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../models/product.model';

@Component({
  standalone: true,
  selector: 'app-product-details',
  imports: [RouterLink, CurrencyPipe, UpperCasePipe, NgIf, NgFor],
  templateUrl: './product-details.page.html'
})
export class ProductDetailsPage implements OnInit {
  private route = inject(ActivatedRoute);
  private api = inject(ProductService);
  private cart = inject(CartService);

  isLoading = true;
  product?: IProduct;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getProductById(id).subscribe({
      next: p => { this.product = p; this.isLoading = false; },
      error: () => { this.isLoading = false; }
    });
  }

  addToCart() {
    if (this.product) this.cart.add(this.product);
    alert('Item adicionado ao carrinho!');
  }
}
