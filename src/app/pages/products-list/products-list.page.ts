import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  standalone: true,
  selector: 'app-products-list',
  imports: [ReactiveFormsModule, AsyncPipe, ProductCardComponent],
  templateUrl: './products-list.page.html'
})
export class ProductsListPage implements OnInit {
  private productService = inject(ProductService);

  isLoading = true;
  products: IProduct[] = [];
  filtered: IProduct[] = [];

  search = new FormControl<string>('', { nonNullable: true });

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (items) => {
        this.products = items;
        this.filtered = items;
        this.isLoading = false;
      },
      error: () => { this.isLoading = false; }
    });

    this.search.valueChanges.subscribe(term => {
      const q = (term ?? '').toLowerCase();
      this.filtered = this.products.filter(p =>
        (p.title + ' ' + p.description).toLowerCase().includes(q)
      );
    });
  }
}
