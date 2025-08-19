import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProduct, IProductListResponse } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly base = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProductListResponse>(`${this.base}/products?limit=0`)
      .pipe(map(res => res.products));
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.base}/products/${id}`);
  }
}
